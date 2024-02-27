"use client";

import React, { useState, useEffect } from "react";
import MouseIcon from "@svg/MouseIcon.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { currentPage } from "@slices/pageSlice";

type Props = {};

const Footer = (props: Props) => {
  const [iconSize, setIconSize] = useState(30);
  const page = useSelector(currentPage);

  useEffect(() => {
    setIconSize(40);

    setTimeout(() => {
      setIconSize(30);
    }, 200);
  }, [page]);

  return (
    <footer>
      <div className="hidden fixed bottom-0 left-0 z-50 backdrop-blur-lg w-full h-20 sm:flex justify-center items-center transition-all duration-400 ease-in-out">
        <Image src={MouseIcon} alt="למעלה" width={iconSize} />
      </div>
    </footer>
  );
};

export default Footer;
