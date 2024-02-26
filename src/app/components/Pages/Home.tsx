import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@components/Layout/Section";

type Props = {};

const Home: React.FC<Props> = () => {
  const animationProps = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <Section className="page" id="home" pageNumber={1}>
      <div className="content">
        <div className="flex-wrapper">
          <motion.div
            className="w-full sm:w-1/2"
            {...animationProps}
            transition={{ ...animationProps.transition, delay: 1.2 }}
          >
            <h1>
              הגיע הזמן למצוא את הפוטנציאל
              <span className="hoverable"> המסתתר </span>
              של העסק שלך.
            </h1>
          </motion.div>
          <div className="w-2/3 sm:w-1/2 flex items-center justify-center relative">
            <motion.div
              className="image-container relative z-10 pointer-events-none"
              {...animationProps}
              transition={{ ...animationProps.transition, delay: 1 }}
            >
              <Image
                src={`https://res.cloudinary.com/dbpb6wt0d/image/upload/v1708973171/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A9%D7%9C_WhatsApp__2024-02-26_%D7%91%D7%A9%D7%A2%D7%94_15.50.07_4bd57dce-removebg_2_p737qi.png`}
                alt="placeholder"
                className="img-fluid"
                width={425}
                height={425}
              />
            </motion.div>

            {[1, 2].map((index) => (
              <motion.div
                key={index}
                className={`absolute ${
                  index === 1 ? "top-1/4 left-1/4" : "bottom-0 right-1/5"
                } w-2/3 h-2/3 ${
                  index === 1
                    ? "border-2 border-light"
                    : "bg-light pointer-events-none"
                }`}
                {...animationProps}
                transition={{
                  ...animationProps.transition,
                  delay: index === 1 ? 0.2 : 0.6,
                }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
