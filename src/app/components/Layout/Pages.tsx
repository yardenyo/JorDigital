"use client";

import { useSelector } from "react-redux";
import { currentPage, previousPage, nextPage, count } from "@slices/pageSlice";

const Pages = () => {
  const current = useSelector(currentPage);
  const previous = useSelector(previousPage);
  const next = useSelector(nextPage);
  const total = useSelector(count);

  const formatPageNumber = (pageNumber: number) =>
    pageNumber < 10 ? `0${pageNumber}` : pageNumber;

  const formattedPrevious = formatPageNumber(previous);
  const formattedCurrent = formatPageNumber(current);
  const formattedNext = formatPageNumber(next);

  const isPreviousPageVisible = current !== 1;
  const isNextPageVisible = next <= total;

  return (
    <section>
      <div className="fixed top-1/2 left-4 z-50">
        <div className="flex flex-col text-light">
          <div
            className={`text-2xl mx-12 text-light/50 font-secondary ${
              isPreviousPageVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {formattedPrevious}
          </div>
          <div className="flex flex-row-reverse items-center">
            <div className="line w-12 h-1 bg-accent" />
            <div className="text-2xl mx-4 text-light font-secondary">
              {formattedCurrent}
            </div>
          </div>
          <div
            className={`text-2xl mx-12 text-light/50 font-secondary ${
              isNextPageVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {formattedNext}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;
