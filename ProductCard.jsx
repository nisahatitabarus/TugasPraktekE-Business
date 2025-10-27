// src/components/ProductCard.jsx
import React from "react";

function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        width="150"
        height="150"
        style={{ borderRadius: "8px" }}
      />
      <h3>{props.name}</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>{props.price}</p>
      <button
        onClick={() => alert(`Anda membeli ${props.name}`)}
        style={{
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Beli Sekarang
      </button>
    </div>
  );
}

export default ProductCard;
