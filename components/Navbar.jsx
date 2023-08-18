"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import { social, NavLinks } from "@/constants";
import { Image } from "@nextui-org/image";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-4 px-4 relative lg:w-[80%] lg:mx-auto"
    >
      <div className="mx-auto flex items-center justify-between">
        <h3 className="font-bold uppercase text-xl">nft meta</h3>
        <div className="md:hidden">
          <HiMenuAlt3 fontSize={27} />
        </div>
        <div className="hidden md:flex items-center justify-center gap-5">
          {NavLinks.map((nav) => (
            <div key={nav.key} className="font-medium">
              {nav.text}
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          {social.map((social, index) => (
            <div key={index}>
              <Image src={social.image} alt={`Social ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
