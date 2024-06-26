import About from './components/home/About/About';
// import Contact from './components/home/contact';
import ContactNoForm from './components/home/contact_no_form';
import Hero from './components/home/hero'
import Projects from './components/home/Projects/projects';
import Navbar from './components/partials/navbar';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      {/* <Contact></Contact> */}
      <ContactNoForm></ContactNoForm>
    </main>
  );
}
