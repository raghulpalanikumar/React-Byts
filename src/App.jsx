import { useState, useEffect } from "react";

function App() {
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Fetching data for product:", productId);
    setProduct(null);
    // Fake API (simulating server)
    setTimeout(() => {
      const data = {
        1: { name: "Laptop", price: "₹50,000" },
        2: { name: "Phone", price: "₹20,000" },
        3: { name: "Headphones", price: "₹5,000" }
      };

      setProduct(data[productId]);
    }, 1000);
  }, [productId]); // 🔥 runs when productId changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Product Page</h1>

      {/* Buttons to change product */}
      <button onClick={() => setProductId(1)}>Laptop</button>
      <button onClick={() => setProductId(2)}>Phone</button>
      <button onClick={() => setProductId(3)}>Headphones</button>

      <hr />

      {/* Show loading or product */}
      {product === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;