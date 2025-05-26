import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Blog from "./pages/Blog"; 
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";
import ScrollToTop from "./components/ScrollToTop"; 
import CourseDetails from "./pages/CourseDetails";
import PhoneCallButton from "./components/PhoneCallButton"; 
import WhatsAppButton from "./components/WhatsAppButton";
import BlogCardSlider from "./sections/BlogCardSlider";
import BlogDetails from "./pages/BlogDetails";
import FloatingSocials from "./components/FloatingSocials";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <section id="home"><Home /></section>
              <section id="courses"><Courses /></section>
              <section id="about"><About /></section>
              <BlogCardSlider/>
              <section id="contact"><Contact /></section>
              <PopupForm />
              <ScrollToTop />
            </>
          } 
        />
         <Route path="/blog/:id" element={<Blog />} /> 
        <Route path="/course/:id" element={<CourseDetails />} /> 
        <Route path="/blogdetails" element={<BlogDetails />} /> 
      </Routes>
      <Footer /> 
      {/* <PhoneCallButton />  
      <WhatsAppButton /> */}
      <FloatingSocials/>
    </div>
  );
};

export default App;
