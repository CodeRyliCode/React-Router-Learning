import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HTML from "./courses/HTML";
import CSS from "./courses/CSS";
import JavaScript from "./courses/JavaScript";

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to="/courses/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/courses/css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="/courses/javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path="/courses/html" element={<HTML />} />
      <Route path="/courses/css" element={<CSS />} />
      <Route path="/courses/javascript" element={<JavaScript />} />
    </Routes>
  </div>
);

export default Courses;
