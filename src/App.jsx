import { useState } from "react";
import amikomLogo from "/logo-amikom.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://amikom.ac.id" target="_blank">
          <img src={amikomLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="rainbow-text">APLIKASI MATHGROWTH</h1>
      <h3>By</h3>
      <h2>Dika Wicaksono 21.11.4238</h2>
      <h2>Martinus Juan Prasetyo 21.11.4251</h2>
      <h2>Rakanannda Erdy S 21.11.4259</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
