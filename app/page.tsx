import Hero from "@/components/hero"
import About from "@/components/about"
import Brands from "@/components/brands"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SkillGraph from "@/components/skill-graph"
import EducationSection from "@/components/education-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <SkillGraph />
      <EducationSection />
      <Brands />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
