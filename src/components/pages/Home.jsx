import Navbar from "../landing/Navbar";
import Hero from "../landing/Hero";
import Companies from "../landing/Companies";
import FeaturedJobs from "../landing/FeaturedJobs";
import Features from "../landing/Features";
import Testimonials from "../landing/Testimonials";
import HowItWorks from "../landing/HowItWorks";
import Contact from "../landing/Contact";
import Footer from "../landing/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}