import React from "react";
import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Statistics from "./components/Statistics";
import CTA from "./components/CTA";
import Students from "./components/Students";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Courses></Courses>
      <Statistics></Statistics>
      <CTA></CTA>
      <Students></Students>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Companies></Companies>
      <Footer></Footer>
    </>
  );
};

export default App;
