import React from "react";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Feedback from "../pages/Feedback";
import Footer from "../pages/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">

      {/* Navbar */}
      <Navbar  className="sticky top-0 z-50 bg-white shadow-md"/>

      {/* Hero Section */}
        <Hero />
      {/*About section*/}
      <About/>
      {/*Categories Section */}
      <Categories/>

      {/*Feedback section */}
      <Feedback/>

      {/*footer section */}
      <Footer/>
    </div>
  );
};

export default Home;