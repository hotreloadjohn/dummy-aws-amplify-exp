import { useState } from "react";
import artImg from "./assets/images/art.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={artImg} className="logo react" alt="art" />
      <h1>Designed by: John Ng</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Like {count}
        </button>
      </div>
    </div>
  );
}

export default App;
