"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  right?: boolean;
  className?: string;
}

const Fade = ({ children, className }: Props) => {
  const showRef = useRef(null);
  const hideRef = useRef(null);
  const isInView = useInView(showRef);
  const notHiding = useInView(hideRef);

  const mainControls = useAnimation();

  const duration = 2

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    } else if (!notHiding) {
      mainControls.start("initial");
    }
  }, [isInView, notHiding]);

  const animVars = {
    initial: {
      opacity: 0,
      transition: {
        duration,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration,
      },
    },
  };

  return (
    <div className="reveal-wrapper">
      <motion.div
        variants={animVars}
        initial="initial"
        animate={mainControls}
        className={className}
      >
        {children}
      </motion.div>
      <div className="reveal-wrapper-trigger" ref={showRef}></div>
      <div className="reveal-wrapper-hide" ref={hideRef}></div>
    </div>
  );
};

export default Fade;
