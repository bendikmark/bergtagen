import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Image.css";

type ImageProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
  return (
    <Fade duration={500} delay={100} className="card">
      <img src={src} alt={alt} />
    </Fade>
  );
};

export default Image;
