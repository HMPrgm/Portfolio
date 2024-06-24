import About from './components/home/About/About';
import Hero from './components/home/hero'
import Projects from './components/home/Projects/projects';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
    </main>
  );
}
