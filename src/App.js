import { useState, useEffect } from "react"; // <-- adicionamos useEffect aqui
import "./App.css";

function App() {
  // Estados principais
  const [count, setCount] = useState(0);
  const [newCounter, setNewCounter] = useState(0);
  const [mystate, setMystate] = useState(0); // <-- criado
  const [name, setName] = useState(""); // <-- criado

  // Efeito que mostra alerta ao atingir 10
  useEffect(() => {
    if (count === 10) {
      alert("🎉 O contador chegou ao limite máximo de 10!");
    }
  }, [count]);

  // Função para quando o botão for clicado
  const handleClick = () => {
    // 1️⃣ Diminui mystate em -1
    setMystate((prev) => prev - 1);

    // 2️⃣ Atualiza o nome
    setName("Stephany");

    // 3️⃣ Aumenta newCounter até o limite 10
    setCount((prev) => (prev < 10 ? prev + 1 : prev));
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1>Contador React</h1>

        {/* Contador principal */}
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>Aumentar</button>
          <button onClick={() => setCount(count - 1)}>Diminuir</button>
          <button onClick={() => setCount(0)}>Resetar</button>
        </div>

        <hr />

        {/* Mostrando os novos estados */}
        <h3>MyState: {mystate}</h3>

        <input
          type="text"
          placeholder="Digite um nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Nome atual: {name}</p>

        <h3>New Counter: {newCounter}</h3>

        <button onClick={handleClick}>Clique para alterar estados</button>
      </div>
    </div>
  );
}

export default App;
