import React, { useState } from "react";

export default function Nav({ onAboutClick, onGalleryClick }) {
  const [aboutClicked, setAboutClicked] = useState(false);
  const [galleryClicked, setGalleryClicked] = useState(false);

  const handleAboutClick = () => {
    setAboutClicked(true);
    setGalleryClicked(false);
    onAboutClick();
  };

  const handleGalleryClick = () => {
    setAboutClicked(false);
    setGalleryClicked(true);
    onGalleryClick();
  };

  return (
    <nav className="w-64 text-lg h-screen">
      <a href="/" className="text-3xl tracking-wider">
        Vince Malazo
      </a>
      <ul className="nav-links pt-5">
        <li>
          <button
            className={`ease-in-out duration-300 ${
              aboutClicked ? "text-gray-400" : "hover:text-gray-400"
            }`}
            onClick={handleAboutClick}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`ease-in-out duration-300 ${
              galleryClicked ? "text-gray-400" : "hover:text-gray-400"
            }`}
            onClick={handleGalleryClick}
          >
            Gallery
          </button>
        </li>
      </ul>
    </nav>
  );
}
