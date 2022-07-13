import React from "react";
import { Outlet, NavLink } from "react-router-dom";


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
<Outlet />
  </div>

  
);



export default Courses;
