"use client"

import Link from "next/link";
import Button from "./Button";
import { GiShoppingCart } from "react-icons/gi";
import {motion} from "framer-motion"
import { getTransition } from "@/utils/getTransition";

const Navber = () => {
  return (
    <motion.header initial={{y:"-100%"}} animate={{y:0}} transition={getTransition(0.9)} className="h-20 bg-light fixed top-0 left-0 right-0 border-b">
      <div className="h-full w-full flex justify-between items-center">
        <nav className="nav-start">
          <Link href="/" className="link-item text-2xl font-semibold">
            goBuy
          </Link>
        </nav>
        <nav className="nav-middle font-medium">
          <ul className="flex gap-5 capitalize">
            <li>
              <Link href="/" className="link-item">
                home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                about
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-end flex items-center gap-5">
          <Link href="/cart" className="relative">
            <GiShoppingCart className="text-2xl" />
            <span className="absolute -top-3 left-3 text-xs bg-dark text-light w-5 h-5 rounded-full flex justify-center items-center font-semibold">
              12
            </span>
          </Link>
          <Button href="/signin" placeholder="signin" color="teal" />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navber;
