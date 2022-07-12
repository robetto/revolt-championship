
export const containerVariants = {
  hidden: {
    opacity: 0, 
    x: "-100vh",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: { delay: 0, duration: 0.4 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};