import Image from "next/image";

import upIcon from "public/images/arrow-up.png";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible ? (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-2 bg-sky-300 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer active:scale-90 hover:animate-zoomInOut"
        >
          <Image src={upIcon} alt="" />
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default ScrollTop;
