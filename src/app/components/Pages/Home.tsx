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
              <span className="hoverable"> המסתתר </span>
              של העסק שלך.
            </h1>
          </div>
          <div className="w-1/2 flex items-center justify-center relative">
            <div className="image-container relative z-50 hover:transform hover:scale-105 transition-transform duration-500">
              <Image
                src="https://res.cloudinary.com/dbpb6wt0d/image/upload/v1708955569/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp__2024-02-26_%D7%91%D7%A9%D7%A2%D7%94_15.50.07_4bd57dce-removebg_rdoobz.png"
                alt="placeholder"
                className="img-fluid"
                width={600}
                height={600}
              />
            </div>

            <div className="absolute top-1/4 left-1/4 w-2/3 h-2/3 border-2 border-light"></div>
            <div className="absolute bottom-0 right-1/5 w-2/3 h-2/3 bg-light"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
