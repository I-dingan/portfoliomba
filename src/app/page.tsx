import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { PowerBiReports } from "@/components/sections/power-bi-reports";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="mx-auto w-full max-w-screen-2xl">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <PowerBiReports />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
