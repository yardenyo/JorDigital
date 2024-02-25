import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="page items-center justify-center" id="home">
        <h1 className="text-4xl font-bold text-accent mb-4">ברוכים הבאים</h1>
        <h2 className="text-2xl font-bold text-accent mb-8">
          אנו כאן כדי לעזור לך
        </h2>
        <p className="text-light">
          אנו מתמחים בבניית אתרים, מיתוג וקידום אתרים. נשמח לעזור לך להגיע לקהל
          היעד שלך.
        </p>
      </section>
      <section className="page items-center justify-center" id="about">
        <h1 className="text-4xl font-bold text-accent mb-4">מי אנחנו</h1>
        <h2 className="text-2xl font-bold text-accent mb-8">
          אנו צוות מיומן ומנוסה
        </h2>
        <p className="text-light">
          אנו צוות מיומן ומנוסה שמתמחה בבניית אתרים, מיתוג וקידום אתרים.
        </p>
      </section>
    </>
  );
};

export default Home;
