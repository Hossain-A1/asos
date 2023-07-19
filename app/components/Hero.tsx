"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";
const Hero = () => {
  return (
    <section className="wrapper section-p h-[calc(100vh-5rem)] border">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={getTransition(0.5)}
        className="h-[40vh] w-full"
      >
        <Image
          src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1800,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/07/MB-ksa-120723-hyperx-gaming-headphone-en.jpg"
          alt="MB-ksa-170723-huawei-nova-y91-po-en2"
          height={600}
          width={600}
          priority
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={getTransition(0.7)}
        className="h-[40vh] w-full mt-5"
      >
        <Image
          src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=1800,height=auto,quality=85,metadata=none/https://wps-media.jarir.com/wp-content/uploads/2023/07/MB-ksa-170723-huawei-nova-y91-po-en2.jpg"
          alt="MB-ksa-170723-huawei-nova-y91-po-en2"
          height={600}
          width={600}
          priority
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
