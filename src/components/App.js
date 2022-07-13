import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// App components
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import CourseContainer from "./courses/CourseContainer";
import { HTMLCourses, CSSCourses, JSCourses } from "../data/courses";
import Featured from "./Featured";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        {/* Route path with wildcard * as first path so when url does not match any routes, the NotFound page is rendered */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:topic/:name" element={<Featured />} />

        <Route
          path="/courses"
          element={<Navigate replace to="/courses/html" />}
        />
        <Route path="/courses" element={<Courses />}>
          <Route
            path="/courses/html"
            element={<CourseContainer data={HTMLCourses} />}
          />
          <Route
            path="/courses/css"
            element={<CourseContainer data={CSSCourses} />}
          />
          <Route
            path="/courses/javascript"
            element={<CourseContainer data={JSCourses} />}
          />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
