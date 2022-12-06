import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import About from "./page/About";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/num" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
