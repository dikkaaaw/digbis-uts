import { useState } from "react";
import amikomLogo from "/logo-amikom.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [names, setNames] = useState([
    "Dika Wicaksono 21.11.4238",
    "Martinus Juan Prasetyo 21.11.4251",
    "Rakanannda Erdy S 21.11.4259",
  ]);
  const [rainbowIndex, setRainbowIndex] = useState(0);
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const handleClick = () => {
    setNames(shuffleArray([...names]));
    setRainbowIndex((rainbowIndex + 1) % rainbowColors.length);
  };

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // Selama masih ada elemen yang belum diacak
    while (0 !== currentIndex) {
      // Pilih elemen yang tersisa
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Tukar dengan elemen saat ini
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

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
      {names.map((name, index) => (
        <h2
          key={index}
          className="name"
          style={{
            "--color":
              rainbowColors[(index + rainbowIndex) % rainbowColors.length],
          }}
        >
          {name}
        </h2>
      ))}
      <div className="card">
        <button onClick={handleClick}>Acak Nama</button>
      </div>
    </>
  );
}

export default App;
