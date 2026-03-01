import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Offers } from './components/Offers';
import { Trust } from './components/Trust';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-observer');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PainSection />
      <Benefits />
      <Testimonials />
      <Offers />
      <Trust />
      <Footer />
    </div>
  );
}

export default App;
