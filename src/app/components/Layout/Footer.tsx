"use client";

import React from "react";
import MouseIcon from "@svg/MouseIcon.svg";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-primary flex justify-center items-center">
        <Image src={MouseIcon} alt="למעלה" width={40} height={40} />
      </div>
    </footer>
  );
};

export default Footer;
