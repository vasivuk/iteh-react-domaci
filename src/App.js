import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Ship from "./components/ship";
import MainSection from "./components/mainSection";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/ship" element={<Ship />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
