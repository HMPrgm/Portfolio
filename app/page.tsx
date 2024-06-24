import About from './components/home/About/About';
import Contact from './components/home/contact';
import Hero from './components/home/hero'
import Projects from './components/home/Projects/projects';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </main>
  );
}
