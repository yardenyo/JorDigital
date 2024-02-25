import React from "react";
import Section from "@components/Layout/Section";
import Image from "next/image";

type Props = {};

const Home = (props: Props) => {
  return (
    <Section className="page" id="home" pageNumber={1}>
      <div className="content">
        <div className="flex-wrapper">
          <div className="w-1/2">
            <h1 className="text-4xl text-light">
              הגיע הזמן למצוא את הפוטנציאל
              <span className="text-accent opacity-0"> המסתתר </span>
              של העסק שלך.
            </h1>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image
              src="https://via.placeholder.com/600"
              alt="placeholder"
              className="img-fluid"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
