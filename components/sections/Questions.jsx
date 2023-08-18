"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Questions = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 px-10 lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto"
    >
      <motion.h2
        variants={textVariant(0.2)}
        className="font-bold text-3xl text-center my-16 md:text-4xl lg:text-5xl"
      >
        Your questions,{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          answered!
        </span>
      </motion.h2>
      <motion.div variants={textVariant(0.4)}>
        <Accordion
          defaultExpandedKeys={["1"]}
          className="md:w-[50%] mx-auto p-7 border-1 border-gray-400 rounded-3xl"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="What is Nerko's NFT Collection?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="How we can buy and invest NFT?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Why we should choose Nerko's NFT?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Where we can buy and sell NFTs?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="How secure is this token?"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            title="What is your address?"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

export default Questions;
