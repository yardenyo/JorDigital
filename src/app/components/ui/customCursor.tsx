"use client";

import React, { useEffect } from "react";
import { TweenMax } from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");
    const $hoverables = document.querySelectorAll(".hoverable");

    document.body.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", onMouseHover);
      $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      for (let i = 0; i < $hoverables.length; i++) {
        $hoverables[i].removeEventListener("mouseenter", onMouseHover);
        $hoverables[i].removeEventListener("mouseleave", onMouseHoverOut);
      }
    };

    function onMouseMove(e: MouseEvent) {
      const { clientX, clientY } = e;

      TweenMax.to($bigBall, 0.4, {
        x: clientX - 15,
        y: clientY - 15,
      });

      TweenMax.to($smallBall, 0.1, {
        x: clientX - 5,
        y: clientY - 7,
      });
    }

    function onMouseHover() {
      TweenMax.to($bigBall, 0.3, {
        scale: 4,
      });
    }

    function onMouseHoverOut() {
      TweenMax.to($bigBall, 0.3, {
        scale: 1,
      });
    }
  }, []);

  return (
    <div className="cursor hidden sm:block">
      <div className="cursor__ball cursor__ball--big">
        <svg height="40" width="40">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="20" width="20">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
