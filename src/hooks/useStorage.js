import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const metadata = {
    contentType: "image/jpeg",
  };

  useEffect(() => {
    // references
    // const storageRef = projectStorage.ref(file.name);
    const storageRef = ref(projectStorage, "mappe/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    const collectionRef = collection(projectFirestore, "mappe");

    uploadTask.on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      () => {
        // const url = await storageRef.getDownloadURL();
        //const url = "https://firebasestorage.googleapis.com/v0/b/revolt-championship.appspot.com/o/mappe%2F1asd.png?alt=media&token=d6977275-4e94-4416-874f-3ac22d7b7ec6"

        const createdAt = serverTimestamp();
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          addDoc(collection(projectFirestore, "mappe"), {
            nome: file.name,
            createdAt,
            url: downloadURL,
          });
        });
        // await collectionRef.add({ url, createdAt });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
