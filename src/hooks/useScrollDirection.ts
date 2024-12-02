import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return scrollDirection;
};
