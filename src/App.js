import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Ship from "./components/ship";
import MainSection from "./components/mainSection";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  const [money, setMoney] = useState(500000);

  const [parts, setParts] = useState([
    {
      id: 1,
      title: "Cannon",
      description: "A cannon is suitable weapon for a ship",
      price: "10000",
      level: 0,
      image: "https://www.svgrepo.com/show/322989/pirate-cannon.svg",
    },
    {
      id: 2,
      title: "Sail",
      description: "A sail is needed to sail waters",
      price: "50000",
      level: 0,
      image: "https://svgsilh.com/svg/158936.svg",
    },
    {
      id: 3,
      title: "Pirate",
      description: "What is a ship without a crew",
      price: "2000",
      level: 0,
      image: "https://freesvg.org/img/pirate_hat.png",
    },
  ]);

  const buyPart = (id) => {
    parts.map((part) => {
      if (part.id === id) {
        const a = money - part.price;
        if (a >= 0) {
          setMoney(a);
          part.level = part.level + 1;
          console.log(part.title + " : " + part.level);
        } else {
          alert("Not enough money!");
        }
      }
    });
  };

  const sellPart = (id) => {
    parts.map((part) => {
      if (part.id === id) {
        if (part.level > 0) {
          const a = parseInt(part.price) + money;
          setMoney(a);
          part.level = part.level - 1;
          console.log(part.title + " : " + part.level);
        } else {
          alert("Part level is already 0");
        }
      }
    });
  };

  return (
    <BrowserRouter className="App">
      <Header />
      <NavBar money={money} />
      <Routes>
        <Route
          path="/"
          element={
            <MainSection parts={parts} onBuy={buyPart} onSell={sellPart} />
          }
        />
        <Route path="/ship" element={<Ship />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
