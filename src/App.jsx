import "./App.css";
import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from "./components/pages/home/PostDetail";
import CreatePost from "./components/pages/CreatePost";
import EditPost from "./components/pages/EditPost";
import { BlogProvider } from "./context/BlogContext";

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
