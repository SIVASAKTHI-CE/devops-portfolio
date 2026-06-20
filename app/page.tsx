import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { PipelineSection } from "@/components/pipeline-section";
import { Projects } from "@/components/projects";
import { BlogPreview } from "@/components/blog-preview";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <PipelineSection />
        <Projects />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
