import { useState } from 'react';
import "./main.js"
import {
  Navbar,Hero , Searchbar, Skill,
  Aboutme,
  Contact,
  Footer
} from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Searchbar />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
