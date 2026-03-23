"use client";
import About from "../components/home/About";
import Clients from "../components/home/Clients";
import Products from "../components/home/Products";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import VideoHero from "../components/home/Videohero";
export default function Home() {
  return (
    <div>
      <VideoHero />
      <About />
      <Clients />
      <Products />
      <Services />
      <Contact />
    </div>
  );
}
