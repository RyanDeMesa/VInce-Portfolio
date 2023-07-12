import React from "react";
// import Image1 from "../img/photo1.jpg";
//   return <img src={Image1}></img>;

const Gallery = () => {
  const imageList = [...new Array(30)].map(
    (number, index) => `/img/photo${index + 1}.jpg`
  );

  return (
    <ul className="img-grid">
      {imageList.map((imgUrl, index) => {
        return (
          <li className="item">
            <figure>
              <img src={imgUrl} alt="collection" />
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
