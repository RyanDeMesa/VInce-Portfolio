import Nav from "./components/Nav";
import React, { useState } from "react";
import Cursor from "./components/Cursor";
import Gallery from "./components/Gallery";

function App() {
  const [showGallery, setShowGallery] = useState(true);

  const hideGallery = () => {
    setShowGallery(false);
  };

  const showGalleryHandler = () => {
    setShowGallery(true);
  };

  return (
    <>
      <Cursor />
      <div className="flex p-5">
        <Nav onAboutClick={hideGallery} onGalleryClick={showGalleryHandler} />
        <div className="main-container">{showGallery && <Gallery />}</div>
      </div>
    </>
  );
}

export default App;
