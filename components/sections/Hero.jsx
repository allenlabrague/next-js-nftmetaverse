"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { BsLink45Deg } from "react-icons/bs";
import { staggerContainer, slideIn, textVariant } from "@/utils/motion";
import { HeroImage } from "@/constants";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 px-10"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <motion.h1
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
          className="font-bold text-4xl text-center"
        >
          High Quality NFT Collection
        </motion.h1>
        <motion.p
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          className="text-gray-500 text-center text-sm"
        >
          A 890 piece custom Nerko's collection is joining the NFT space on
          Opensea.
        </motion.p>
        <motion.div
          variants={textVariant(1.3)}
          initial="hidden"
          whileInView="show"
        >
          <Button
            className="bg-gradient-to-tr from-purple-800 to-pink-600 text-white font-semibold rounded-full"
            endContent={<BsLink45Deg fontSize={20} />}
          >
            View in OPENSEA
          </Button>
        </motion.div>
        <motion.div
          variants={textVariant(1.4)}
          initial="hidden"
          whileInView="show"
          className="flex items-center justify-start gap-6 mt-5"
        >
          <AvatarGroup>
            <Avatar isBordered src="/hero-ava1.png" />
            <Avatar isBordered src="/hero-ava2.png" />
            <Avatar isBordered src="/hero-ava3.png" />
          </AvatarGroup>
          <div>
            <h2 className="font-bold text-2xl">47K+</h2>
            <p className="text-xs text-gray-500">Community members</p>
          </div>
        </motion.div>
      </div>
      {/* FOR IMAGE IN MOTION.DIV IN DOWN */}
      <motion.div
        variants={slideIn("right", "tween", 0.5, 1)}
        className="flex items-center justify-center mt-8"
      >
        <Image src="/hero-right.png" alt="hero image" className="w-full" />
      </motion.div>

      {/* ARRAY IMAGES IN COMPANIES */}

      <div className="flex flex-wrap items-center justify-center gap-7 my-16">
        {HeroImage.map((url) => (
          <motion.div
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView="show"
            key={url.key}
          >
            <Image
              src={url.image}
              alt="hero image"
              className="w-[125px] rounded-none"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
