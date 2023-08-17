"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="py-4 px-4 relative"
    >
      <div className="mx-auto flex items-center justify-between">
        <h3 className="font-bold uppercase text-xl">nft meta</h3>
        <HiMenuAlt3 fontSize={27} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
