// pages/Home.jsx
// The main page — assembles every portfolio section in order.
// Import/remove sections here to control what appears.

import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import ScrollReveal from "../components/ui/ScrollReveal";

const Home = () => (
  <>
    <Hero />
    <ScrollReveal><About preview /></ScrollReveal>
    <ScrollReveal><Skills preview /></ScrollReveal>

    <ScrollReveal><Experience preview /></ScrollReveal>
    <ScrollReveal><Projects preview /></ScrollReveal>

    <ScrollReveal><Services preview /></ScrollReveal>
    <ScrollReveal><Testimonials preview /></ScrollReveal>
  </>
);

export default Home;
