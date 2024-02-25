"use client";

import { useSelector } from "react-redux";
import { currentPage, previousPage, nextPage } from "@slices/pageSlice";

const Pages = () => {
  const currentPageNumber = useSelector(currentPage);
  const previousPageNumber = useSelector(previousPage);
  const nextPageNumber = useSelector(nextPage);

  const currentPageString =
    currentPageNumber < 10 ? `0${currentPageNumber}` : currentPageNumber;
  const prevPageString =
    previousPageNumber < 10 ? `0${previousPageNumber}` : previousPageNumber;
  const nextPageString =
    nextPageNumber < 10 ? `0${nextPageNumber}` : nextPageNumber;

  return (
    <section>
      <div className="fixed top-1/2 left-4 z-50">
        <div className="flex flex-col text-light">
          <div
            className={`text-2xl mx-12 text-light/50 font-secondary ${
              currentPageNumber === 1 ? "opacity-0" : ""
            }`}
          >
            {prevPageString}
          </div>
          <div className="flex flex-row-reverse items-center">
            <div className="line w-12 h-1 bg-accent" />
            <div className="text-2xl mx-4 text-light font-secondary">
              {currentPageString}
            </div>
          </div>
          <div className="text-2xl mx-12 text-light/50 font-secondary">
            {nextPageString}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;
