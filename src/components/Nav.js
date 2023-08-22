import React, { useState } from "react";

export default function Nav({ onAboutClick, onGalleryClick }) {
  return (
    <nav className="w-1/6 text-lg h-screen">
      <a href="/" className="text-3xl tracking-wider">
        Vince Malazo
      </a>
      <ul className="block nav-links pt-5">
        <li>
          <button
            className={`ease-in-out duration-300 hover:text-gray-400`}
            onClick={onAboutClick}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`ease-in-out duration-300 hover:text-gray-400`}
            onClick={onGalleryClick}
          >
            Gallery
          </button>
        </li>
      </ul>
    </nav>
  );
}
