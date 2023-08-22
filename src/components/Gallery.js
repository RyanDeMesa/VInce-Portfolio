import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Gallery = () => {
  const imageList = [...new Array(29)].map(
    (number, index) => `/img/photo${index + 1}.jpg`
  );
  
  // States for Selected Images and If Modal is Opened or Closed
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
    setTimeout(() => {
      setFadeIn(true);
    }, 600);
  }

  const closeModal = () => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedImage("");
      setModalOpen(false);
    }, 800);
  }

  useEffect(() => {
    if (modalOpen) {
      setFadeIn(true);
    }
  }, [modalOpen]);

  return (
    <div>
    <ul className="grid grid-cols-3 gap-3">
      {imageList.map((imgUrl, index) => {
        return (
          <li 
          key={index}
          className="flex items-center justify-center"
          onClick={() => openModal(imgUrl)}>
            <figure className="p-2">
              <img
                src={imgUrl}
                alt="collection"
                className="w-full h-full object-cover rounded cursor-pointer"
              />
            </figure>
          </li>
        );
      })}
    </ul>

    {modalOpen && (
        <Modal
          imageUrl={selectedImage}
          onClose={closeModal}
          fadeIn={fadeIn}
        />
      )}
    </div>
  );
};

export default Gallery;
