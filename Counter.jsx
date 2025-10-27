import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="counter"
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

export default Counter;
