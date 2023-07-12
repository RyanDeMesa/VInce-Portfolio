import React from "react";
// import Image1 from "../img/photo1.jpg";
//   return <img src={Image1}></img>;

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

  //   return (
  //     <div clas="flex">
  //       <div className="grid grid-cols-3 gap-2">
  //         {imageList && imageList.map((imageUrl) => <img src={imageUrl} />)}
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <ul className="img-grid">
  //       {imageList.map((imgUrl, index) => {
  //         return (
  //           <li className="item">
  //             <figure>
  //               <img src={imgUrl} alt="collection" />
  //             </figure>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
};

export default Gallery;
