import "./App.css";
import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "./components/pages/home/PostDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
