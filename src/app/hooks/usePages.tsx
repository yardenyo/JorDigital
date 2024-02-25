"use client";

import { useState } from "react";

const usePages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const setPage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const getPage = () => {
    return currentPage;
  };

  return {
    setPage,
    getPage,
  };
};

export default usePages;
