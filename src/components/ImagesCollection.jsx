import React, { useState } from "react";
import ImageCard from "./ImageCard";

const ImagesCollection = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const imagesList = [...new Array(9)].map(
    (number, index) => `${process.env.PUBLIC_URL}/images/image-${index + 1}.jpg`
  );

  const handleShowMore = (e) => {
    e.preventDefault();
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div>
      <ul className="images-collection-container">
        {imagesList.slice(0, visibleCount).map((imgUrl, index) => (
          <li
            key={imgUrl}
            className={index % 2 === 0 ? "item short" : "item tall"}
          >
            <figure>
              <ImageCard imgUrl={imgUrl} />
            </figure>
          </li>
        ))}
      </ul>
      {visibleCount < imagesList.length && (
        <div className="d-flex mb-2">
          <a href="#" className="mx-auto fs-3" onClick={handleShowMore}>
            Ver más
          </a>
        </div>
      )}
    </div>
  );
};

export default ImagesCollection;
