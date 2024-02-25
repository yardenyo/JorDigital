import React from "react";
import Section from "@components/Layout/Section";

type Props = {};

const Home = (props: Props) => {
  return (
    <Section className="page" id="home" page="1">
      <div className="content">
        <h1 className="text-4xl font-bold text-accent mb-4">ברוכים הבאים</h1>
        <h2 className="text-2xl font-bold text-accent mb-8">
          אנו כאן כדי לעזור לך
        </h2>
        <p className="text-light">
          אנו מתמחים בבניית אתרים, מיתוג וקידום אתרים. נשמח לעזור לך להגיע לקהל
          היעד שלך.
        </p>
      </div>
    </Section>
  );
};

export default Home;
