import React from 'react';
import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';


const App = () => (
  <BrowserRouter>
  <div className="container">
  <Header />
  <Routes>
<Route path="/" element={<Home /> } />
<Route path="/about" element={<About  title='About' /> } />
<Route path="/teachers" element={<Teachers /> } />
<Route path="/courses" element={<Courses /> } />
</Routes>
  </div>
  </BrowserRouter>
);



export default App;
