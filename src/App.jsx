import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./assets/css/app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer></footer>
      </Router>
    </div>
  );
}

export default App;
