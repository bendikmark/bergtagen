import React, { useEffect, useRef, useState } from "react";
import "./FadeInImage.css";

type FadeInImageProps = {
  src: string;
  alt: string;
};

const FadeInImage = ({ src, alt }: FadeInImageProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    domRef.current && observer.observe(domRef.current);
  }, []);
  return (
    <img
      className={`fade-in-section ${isVisible ? "is-visible" : ""} image`}
      ref={domRef}
      src={src}
      alt={alt}
    />
  );
};

export default FadeInImage;
