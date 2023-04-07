import { useState } from "react";
import artImg from "./assets/images/art.png";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <img src={artImg} className="logo react" alt="art" />
      <h1>Designed by: John Ng</h1>
      <div className="card">
        <button onClick={() => setLikes((like) => like + 1)}>
          Like {likes}
        </button>
      </div>
    </div>
  );
}

export default App;
