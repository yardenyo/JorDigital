"use client";

import React from "react";
import usePages from "@hooks/usePages";
import HomeComponent from "@components/Pages/Home";
import AboutComponent from "@components/Pages/About";

type Props = {};

const Home = (props: Props) => {
  const { setPage } = usePages();

  return (
    <div className="page-wrapper">
      <HomeComponent />
      <AboutComponent />
    </div>
  );
};

export default Home;
