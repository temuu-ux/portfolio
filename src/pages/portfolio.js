import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
// import Footer from "@/components/Footer.1";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section id="section1">
        <About />
      </section>

      <section id="section2">
        <Skills />
      </section>
      <section id="section3">
        <Experience />
      </section>

      <Work />
      <section id="section4">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};
export default  ;
