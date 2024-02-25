"use client";

import React, { useEffect } from "react";
import HomeComponent from "@components/Pages/Home";
import AboutComponent from "@components/Pages/About";
import { useDispatch } from "react-redux";
import { setCount } from "@slices/pageSlice";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const components = [HomeComponent, AboutComponent];

  useEffect(() => {
    dispatch(setCount(components.length));
  }, [components.length, dispatch]);
  return (
    <div className="page-wrapper">
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default Home;
