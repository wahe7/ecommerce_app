import React from "react";

const ItemCard = ({ item, onAdd }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        width: "200px",
      }}
    >
      <h4>{item.name}</h4>
      <p>Category: {item.category}</p>
      <p>Price: ₹{item.price}</p>
      <button
        onClick={() => onAdd(item._id)}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
