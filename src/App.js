import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1>Contador React</h1>
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Aumentar</button>
          <button onClick={() => setCount(count - 1)}>Diminuir</button>
          <button onClick={() => setCount(0)}>Resetar</button>
        </div>
      </div>
    </div>
  );
}

export default App;

