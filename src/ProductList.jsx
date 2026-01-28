import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const dispatch = useDispatch();

  // ✅ Redux cart access (Task 4)
  const cartItems = useSelector(state => state.cart.items);

  // ✅ Total quantity for cart icon
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Refreshing aroma, used in teas.",
          cost: "$12"
        }
      ]
    }
  ];

  // ✅ Add to cart (Redux)
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true
    }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar" style={{ backgroundColor: '#4CAF50', padding: '15px' }}>
        <a href="/" onClick={handleHomeClick}>
          <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
        </a>

        <div>
          <a href="#" style={{ color: 'white', marginRight: 20 }}>
            Plants
          </a>

          {/* ✅ Cart icon with count */}
          <a href="#" onClick={handleCartClick} style={{ color: 'white', position: 'relative' }}>
            🛒
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-12px',
              background: 'white',
              color: 'green',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {totalCartQuantity}
            </span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, idx) => (
            <div key={idx}>
              <h2>{category.category}</h2>

              <div className="product-category">
                {category.plants.map((plant, index) => (
                  <div className="product-card" key={index}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="price">{plant.cost}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                      style={{
                        backgroundColor: addedToCart[plant.name] ? 'gray' : '#4CAF50',
                        color: 'white'
                      }}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
