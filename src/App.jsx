import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {!showProducts ? (
        <div className="landing-page">
          <div className="background-image"></div>

          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p className="tagline">Where Green Meets Serenity</p>

              <button
                className="get-started-button"
                onClick={() => setShowProducts(true)}
              >
                Get Started
              </button>
            </div>

            <div className="about-text">
              <p>
                At Paradise Nursery, we bring nature closer to you. Explore our
                curated selection of air-purifying, aromatic, medicinal, and
                low-maintenance plants.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProducts(false)} />
      )}
    </>
  );
}

export default App;
