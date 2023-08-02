
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Plans from "./Pages/Plans/Plans";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Components/Footer";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (

    <BrowserRouter>

      <Navbar />
    

      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='plans' element={<Plans />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>


  );
}

export default App;

  // <Routes>
  //   <Route index element={<Home/>}/>
  //   <Route path='about' element={<About/>}/>
  //   <Route path='Contact' element={<Contact/>}/>
  //   <Route path='gallery' element={<Gallery/>}/>
  //   <Route path='plans' element={<Plans/>}/>
  //   <Route path='*' element={<NotFound/>}/>
  // </Routes>