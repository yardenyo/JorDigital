"use client";

import React from "react";
import { useState, useEffect } from "react";

type Props = {};

const Pages = (props: Props) => {
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(2);
  const [pageNumber, setPageNumber] = useState("");
  const [prevPageNumber, setPrevPageNumber] = useState("");
  const [nextPageNumber, setNextPageNumber] = useState("");

  useEffect(() => {
    page < 10 ? setPageNumber(`0${page}`) : setPageNumber(page.toString());
    prevPage < 10
      ? setPrevPageNumber(`0${prevPage}`)
      : setPrevPageNumber(prevPage.toString());
    nextPage < 10
      ? setNextPageNumber(`0${nextPage}`)
      : setNextPageNumber(nextPage.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <section>
      <div className="absolute top-1/2 left-4 z-50">
        <div className="flex flex-col">
          {prevPage !== 0 && (
            <div className="text-2xl mx-12 text-light/50 font-secondary">
              {prevPageNumber}
            </div>
          )}
          <div className="flex flex-row-reverse items-center">
            <div className="line w-12 h-1 bg-accent" />
            <div className="text-2xl mx-4 text-light font-secondary">
              {pageNumber}
            </div>
          </div>
          <div className="text-2xl mx-12 text-light/50 font-secondary">
            {nextPageNumber}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;
