import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "./animationVariants";
import { Footer } from "../components/Footer";
import { PageUp } from "../components/PageUp";
import { TransparentNavbar } from "../components/TransparentNavbar";

export function Inner({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <TransparentNavbar />
      {children}
      <Footer />
      <PageUp />
    </motion.div>
  );
}
Inner.propTypes = {
  children: PropTypes.node,
};
