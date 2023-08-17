"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { social } from "@/constants";
import { Image } from "@nextui-org/image";
import { FooterDetails } from "@/constants";
import { BsArrowUpShort } from "react-icons/bs";

const Footer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-10 border-t-1 border-gray-300"
    >
      <motion.div variants={textVariant(0.5)} className="flex flex-col gap-5">
        <h3 className="font-bold uppercase text-3xl mt-24">nft meta</h3>
        <p className="text-gray-500 text-sm">
          Join our Discord channel or follow us on Twitter to keep up to date
          with our latest work and announcements.
        </p>
        <div className="flex items-center gap-3 mb-10">
          {social.map((img, index) => (
            <Image key={index} src={img.image} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={textVariant(0.6)} className="flex flex-col gap-5">
        {FooterDetails.map((text, index) => (
          <div key={index} className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">{text.title}</h3>
            <ul className="flex flex-col gap-3">
              <li>About</li>
              <li>Collection</li>
              <li>Roadmap</li>
              <li>FAQs</li>
            </ul>
          </div>
        ))}
      </motion.div>
      <motion.div
        variants={textVariant(0.7)}
        className="flex flex-col items-center justify-center gap-3 mt-10"
      >
        <p className="text-gray-500 text-sm">
          Copyrights @ 2023 Nerko's All Rights Reserved.
        </p>
        <div className="flex items-center gap-7 mb-3">
          <p className="text-gray-500 text-sm">Privacy policy</p>
          <p className="text-gray-500 text-sm">Terms of Use</p>
          <BsArrowUpShort fontSize={20} color="gray" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
