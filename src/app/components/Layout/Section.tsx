import { ReactNode, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import usePages from "@hooks/usePages";

type Props = {
  children: ReactNode;
  id: string;
  className?: string;
  page: string;
};

const Section = ({ children, id, className, page }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { setPage } = usePages();

  useEffect(() => {
    if (isInView) {
      setPage(parseInt(page));
    }
  }, [isInView, setPage, page]);

  return (
    <section
      className={className}
      id={id}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </section>
  );
};

export default Section;
