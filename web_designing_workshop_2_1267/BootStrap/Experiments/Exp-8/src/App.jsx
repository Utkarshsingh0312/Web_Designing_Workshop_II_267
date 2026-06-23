import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            color: "#333",
            marginBottom: "20px"
          }}
        >
          Counter App
        </h1>

        <h2
          style={{
            fontSize: "60px",
            color: "#007bff",
            marginBottom: "30px"
          }}
        >
          {count}
        </h2>

        <div>
          <button
            onClick={increment}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "10px 18px",
              margin: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Increment
          </button>

          <button
            onClick={decrement}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "10px 18px",
              margin: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Decrement
          </button>
        </div>

        <button
          onClick={reset}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 25px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px"
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;