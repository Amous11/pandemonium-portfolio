import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "./animationVariants";
import { Footer } from "../Footer";

export function Inner({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
      <Footer />
    </motion.div>
  );
}
Inner.propTypes = {
  children: PropTypes.node,
};
