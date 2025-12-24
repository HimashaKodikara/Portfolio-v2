import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Awards from '../components/Awards';
import Activities from '../components/Activities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = ({ isDark, toggleTheme }) => {
  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Awards />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
