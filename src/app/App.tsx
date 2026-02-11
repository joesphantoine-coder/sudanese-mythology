import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import SudaneseMythology from "../pages/SudaneseMythology";
import NotFound from "../pages/NotFound";
import Article from "../pages/Article";
import Footer from "../components/Footer";
import About from "../pages/About";

export default function App() {
  return (
    <>
      <Navbar />
      <main
        style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px 40px" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sudanese-mythology" element={<SudaneseMythology />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
