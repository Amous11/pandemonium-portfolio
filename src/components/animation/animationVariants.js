export const pageVariants = {
    initial: {
      y: "100%",
      opacity: 0
    },
    in: {
      y: "0%",
      opacity: 1
    },
    out: {
      y: "-100%",
      opacity: 0
    },
  };
  
export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
}