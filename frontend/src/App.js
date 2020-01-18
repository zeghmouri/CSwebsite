import React from "react";
import "./App.css";
import BlogPage from "./components/HomePage/homepage";
import Scroll from "./components/sponsors/scroll";
import { MDBMask } from "mdbreact";
import Contact from "./components/contact";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "https://mdbootstrap.com/img/Photos/Others/images/89.jpg"
      }}
    >
      <MDBMask
        className="d-flex justify-content-center align-items-center"
        overlay="indigo-strong"
      >
        <div className="App-content">
          <BlogPage />
          <Scroll />
          <Contact />
        </div>
      </MDBMask>
    </div>
  );
}

export default App;
