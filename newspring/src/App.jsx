import React, { useEffect, useState } from "react";
import "./App.css"
import Nav from "./components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Service from "./pages/service/Service";
import WorshipNight from "./pages/worshipNight/WorshipNight";
import BibleStudy from "./pages/bibleStudy/BibleStudy";
import ReadBlog from "./pages/readBlog/ReadBlog";
import BlogGrid from "./pages/bloggrid/BlogGrid";


const App = () => {
  const [active, setActive] = useState("home");

    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

  

  return (
    <div>
     
      <Nav active={active} />
      <Routes>
        <Route path="/" element={<Home setActive={setActive} />} />
        <Route path="/about" element={<About setActive={setActive} />} />
        <Route path="/contact" element={<Contact setActive={setActive} />} />
        <Route path="/services" element={<Service setActive={setActive} />} />
        <Route path="/worshipnight" element={<WorshipNight />} />
        <Route path="/biblestudy" element={<BibleStudy />} />
        <Route
          path="/readblog/:id"
          element={<ReadBlog setActive={setActive} />}
        />
        <Route path="/bloggrid/:categoryIndex" element={<BlogGrid setActive={setActive}/> } />
      </Routes>
      <Footer />
      <div  className=" take_up ">
        <i onClick={()=>{scrollTop()}} className="fa-solid fa-arrow-up iconactive"></i>
      </div>
    </div>
  );
};

export default App;
