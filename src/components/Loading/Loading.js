import pleasewait from "../../assests/pleasewait.png";
import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      className="loading"
      initial={{ x: "100%" }}
      animate={{ x: "calc(100vw - 50%)" }}
    >
      <img src={pleasewait} alt="Loading" />
    </motion.div>
  );
}

export default Loading;
