import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// App components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import HTML from "./courses/HTML";
import CSS from "./courses/CSS";
import JavaScript from "./courses/JavaScript";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses" element={<Courses />}>
          <Route
            path="/courses"
            element={<Navigate replace to="/courses/html" />}
          />
          <Route path="/courses/html" element={<HTML />} />
          <Route path="/courses/css" element={<CSS />} />
          <Route path="/courses/javascript" element={<JavaScript />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
