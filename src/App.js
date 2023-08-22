import React, { useState } from "react";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Gallery from "./components/Gallery";
import About from "./components/About"; // Import your About component

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showGallery, setShowGallery] = useState(true);

  const showAboutComponent = () => {
    setShowAbout(true);
    setShowGallery(false);
  };

  const showGalleryComponent = () => {
    setShowAbout(false);
    setShowGallery(true);
  };

  return (
    <>
      <Cursor />
      <div className="flex p-5">
        <Nav
          onAboutClick={showAboutComponent}
          onGalleryClick={showGalleryComponent}
        />
        <div className="flex-1 main-container">
          {showAbout ? <About /> : null}
          {showGallery ? <Gallery /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
