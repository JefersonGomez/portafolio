import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
