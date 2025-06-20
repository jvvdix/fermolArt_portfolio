import React from "react";
import { motion } from "framer-motion";

const ImageCard = ({ imgUrl }) => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.9,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="img-card"
    >
      <img src={imgUrl} alt="" />
    </motion.div>
  );
};

export default ImageCard;
