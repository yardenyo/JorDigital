import React from "react";
import HomeComponent from "@components/Pages/Home";
import AboutComponent from "@components/Pages/About";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="page-wrapper">
      <HomeComponent />
      <AboutComponent />
    </div>
  );
};

export default Home;
