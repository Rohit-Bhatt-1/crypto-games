import pleasewait from "../../assests/pleasewait.png";
import { motion } from "framer-motion";
import "./Loading.css";

const loadingVariants = {
  animation: {
    x: [-20, 20],
    y: [0, -30],
    rotateY: [-90, 90],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
      },
      rotateY: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
  },
  whileHover: {
    scale: 5,
    transition: { duration: 1 },
  },
};

function Loading() {
  return (
    <motion.div
      variants={loadingVariants}
      animate="animation"
      className="loading"
      whileHover="whileHover"
    >
      <img src={pleasewait} alt="Loading" className="coin" />
    </motion.div>
  );
}

export default Loading;
