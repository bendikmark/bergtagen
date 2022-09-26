import React from "react";
import FadeInImage from "../../components/FadeInImage";
import bilde1 from "../../images/bilde1.jpg";
import bilde2 from "../../images/bilde2.jpg";
import bilde3 from "../../images/bilde3.jpg";
import "./Galleri.css";

const Galleri = () => {
  const bilder: { src: string; alt: string }[] = [
    { src: bilde1, alt: "bilde1" },
    { src: bilde1, alt: "bilde1" },
    { src: bilde2, alt: "bilde2" },
    { src: bilde2, alt: "bilde2" },
    { src: bilde3, alt: "bilde3" },
    { src: bilde3, alt: "bilde3" },
  ];

  return (
    <div className="image-container">
      <div className="image-grid">
        {bilder.map((bilde) => (
          <FadeInImage src={bilde.src} alt={bilde.alt} />
        ))}
      </div>
    </div>
  );
};

export default Galleri;
