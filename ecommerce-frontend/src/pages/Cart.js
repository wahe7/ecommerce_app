import React, { useState, useEffect } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from backend
  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");
      setCartItems(res.data); // backend returns items array directly
    } catch (err) {
      console.error(err);
      alert("Failed to fetch cart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Remove item from cart
  const handleRemove = async (itemId) => {
    try {
      await API.delete(`/cart/${itemId}`);
      setCartItems((prev) => prev.filter((item) => item.itemId._id !== itemId));
    } catch (err) {
      alert("Failed to remove item");
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.itemId.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {cartItems.map((cartItem) => (
              <div
                key={cartItem.itemId._id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "15px",
                  width: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h4>{cartItem.itemId.name}</h4>
                  <p>Category: {cartItem.itemId.category}</p>
                  <p>Price: ₹{cartItem.itemId.price}</p>
                  <p>Quantity: {cartItem.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemove(cartItem.itemId._id)}
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#d32f2f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <h3 style={{ marginTop: "20px" }}>Total: ₹{totalPrice}</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
