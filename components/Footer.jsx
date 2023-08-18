"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { social } from "@/constants";
import { Image } from "@nextui-org/image";
import { FooterDetails } from "@/constants";

const Footer = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mt-10 px-10 lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto border-t-1 border-gray-300 grid md:grid-cols-2 lg:grid-cols-3 lg:place-items-center"
      >
        <motion.div variants={textVariant(0.5)} className="flex flex-col gap-5">
          <h3 className="font-bold uppercase text-3xl mt-12">nft meta</h3>
          <p className="text-gray-500 text-sm">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
          <div className="flex items-center gap-3">
            {social.map((img, index) => (
              <Image key={index} src={img.image} />
            ))}
          </div>
        </motion.div>
        <motion.div variants={textVariant(0.6)}>
          <ul className="flex flex-col items-start justify-center gap-4 mt-12">
            <li className="text-lg font-semibold">Quick Link</li>
            <li className="text-gray-500 text-sm">About</li>
            <li className="text-gray-500 text-sm">Collection</li>
            <li className="text-gray-500 text-sm">Roadmap</li>
            <li className="text-gray-500 text-sm">FAQs</li>
          </ul>
        </motion.div>
        <motion.div variants={textVariant(0.7)}>
          <ul className="flex flex-col items-start justify-center gap-4 mt-12">
            <li className="text-lg font-semibold">Community</li>
            <li className="text-gray-500 text-sm">About</li>
            <li className="text-gray-500 text-sm">Collection</li>
            <li className="text-gray-500 text-sm">Roadmap</li>
            <li className="text-gray-500 text-sm">FAQs</li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        variants={textVariant(0.7)}
        className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-3 mt-10 mb-10 md:w-[80%] md:mx-auto"
      >
        <p className="text-gray-500 text-sm">
          Copyrights @ 2023 Nerko's All Rights Reserved.
        </p>
        <div className="flex items-center gap-7">
          <p className="text-gray-500 text-sm">Privacy policy</p>
          <p className="text-gray-500 text-sm">Terms of Use</p>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
