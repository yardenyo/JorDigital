"use client";

import React, { useState, useEffect } from "react";
import MouseIcon from "@svg/MouseIcon.svg";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  const [iconSize, setIconSize] = useState(30);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIconSize(40);
      setTimeout(() => {
        setIconSize(30);
      }, 700);
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-primary flex justify-center items-center transition-all duration-400 ease-in-out">
        <Image src={MouseIcon} alt="למעלה" width={iconSize} />
      </div>
    </footer>
  );
};

export default Footer;
