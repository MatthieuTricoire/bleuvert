import "./App.css";

// React router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components import
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages import
import Home from "./pages/Home";
import Article from "./pages/Article";
import About from "./pages/About";
import Prestation from "./pages/Prestation";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prestation" element={<Prestation />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
