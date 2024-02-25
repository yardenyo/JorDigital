import React from "react";
import Section from "@components/Layout/Section";

type Props = {};

const About = (props: Props) => {
  return (
    <Section className="page" id="about" page="2">
      <div className="content">
        <h1 className="text-4xl font-bold text-accent mb-4">מי אנחנו</h1>
        <h2 className="text-2xl font-bold text-accent mb-8">
          אנו צוות מיומן ומנוסה
        </h2>
        <p className="text-light">
          אנו צוות מיומן ומנוסה שמתמחה בבניית אתרים, מיתוג וקידום אתרים.
        </p>
      </div>
    </Section>
  );
};

export default About;
