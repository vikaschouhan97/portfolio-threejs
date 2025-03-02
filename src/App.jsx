import Aurora from "./components/background/Aurora";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/My Projects/Projects";
import "./App.css";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <Aurora amplitude={1} />
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
