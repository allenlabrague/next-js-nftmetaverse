"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { WalletConnectedDetails } from "@/constants";

const WalletsConnected = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 px-10"
    >
      <motion.div
        variants={textVariant(0.4)}
        className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-8"
      >
        {WalletConnectedDetails.map((index) => (
          <div key={index.title}>
            <h3 className="font-bold text-4xl text-center mb-4">
              {index.title}
            </h3>
            <p className="text-center text-gray-500">{index.subtitle}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WalletsConnected;
