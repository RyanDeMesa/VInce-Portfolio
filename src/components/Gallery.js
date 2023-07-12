import React from "react";

const Gallery = () => {
  const imageList = [...new Array(29)].map(
    (number, index) => `/img/photo${index + 1}.jpg`
  );

  return (
    <ul className="grid grid-cols-3 gap-4">
      {imageList.map((imgUrl, index) => {
        return (
          <li className="flex items-center justify-center">
            <figure className="p-2">
              <img
                src={imgUrl}
                alt="collection"
                className="w-full h-full object-cover rounded"
              />
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
