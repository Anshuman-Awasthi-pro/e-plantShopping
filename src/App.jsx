import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {!showProducts ? (
        <div className="landing-page">
          <div
            className="background-image"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')",
            }}
          ></div>

          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>

              <div className="divider"></div>

              <p>Where Green Meets Serenity</p>

              <button
                className="get-started-button"
                onClick={() => setShowProducts(true)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
