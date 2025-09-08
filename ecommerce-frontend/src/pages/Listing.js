import React, { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import Filter from "../components/Filter";

const Listing = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchItems = async () => {
    try {
      let query = "";
      const filters = [];
      if (category) filters.push(`category=${category}`);
      if (minPrice) filters.push(`minPrice=${minPrice}`);
      if (maxPrice) filters.push(`maxPrice=${maxPrice}`);
      if (filters.length) query = "?" + filters.join("&");

      const res = await API.get(`/items${query}`);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddToCart = async (itemId) => {
    try {
      await API.post("/cart", { itemId, quantity: 1 });
      alert("Added to cart!");
    } catch (err) {
      alert("Failed to add to cart");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Items</h2>
        <Filter
          category={category}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setCategory={setCategory}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          onApply={fetchItems}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {items.map((item) => (
            <ItemCard key={item._id} item={item} onAdd={handleAddToCart} />
          ))}
        </div>
        <button
          style={{ marginTop: "20px" }}
          onClick={() => navigate("/cart")}
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default Listing;
