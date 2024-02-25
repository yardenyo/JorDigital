"use client";

import { ReactNode, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import usePages from "@hooks/usePages";

type Props = {
  children: ReactNode;
  id: string;
  className?: string;
  pageNumber: number;
};

const Section = ({ children, id, className, pageNumber }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { setPage, getPage } = usePages();

  useEffect(() => {
    if (isInView) {
      setPage(pageNumber);
    }
  }, [isInView, pageNumber, setPage]);

  return (
    <section className={className} id={id} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
