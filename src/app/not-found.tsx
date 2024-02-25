import React from "react";

const NotFound = () => {
  return (
    <section className="page flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-accent mb-4">
        Oops! לא נמצא הדף שחיפשת
      </h1>
      <h2 className="text-2xl font-bold text-accent mb-8">404 - לא נמצא</h2>
      <p className="text-light">
        אנו מתנצלים, אך הדף שאתה מחפש כנראה לא קיים או שהתרחשה שגיאה.
      </p>
    </section>
  );
};

export default NotFound;
