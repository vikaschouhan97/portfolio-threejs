import Aurora from "./components/background/Aurora";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <>
    <Aurora colorStops={["#ff00ff", "#00ffff", "#ffcc00"]} amplitude={1} />
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </main>
    </>
  );
};

export default App;
