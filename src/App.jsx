import Aurora from "./components/background/Aurora";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/My Projects/Projects";
import "./App.css";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
    <Aurora amplitude={1} />
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    </>
  );
};

export default App;
