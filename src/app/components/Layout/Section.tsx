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
    <section
      className={className}
      id={id}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.19, 1, 0.22, 1) 0.5s",
      }}
    >
      {children}
    </section>
  );
};

export default Section;
