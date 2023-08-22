import Nav from "./components/Nav";
import React from "react";
import Cursor from "./components/Cursor";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Cursor />
      <div className="flex p-5">
        <Nav />
        <div className="flex-1">
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default App;
