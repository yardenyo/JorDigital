"use client";

import { ReactNode, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";

type Props = {
  children: ReactNode;
  id: string;
  className?: string;
  pageNumber: number;
};

const Section = ({ children, id, className, pageNumber }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch({ type: "page/setPage", payload: pageNumber });
    }
  }, [isInView, pageNumber, dispatch]);

  return (
    <section className={className} id={id} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
