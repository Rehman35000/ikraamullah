import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ScrollToTop from './components/ScrollToTop';
import useTheme from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Animated constellation background (fixed, behind everything) */}
      <ParticleBackground />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Floating helpers */}
      <ScrollToTop />
      <ChatWidget />
    </>
  );
}
