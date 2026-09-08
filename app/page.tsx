import { Credentials } from "@/components/credentials";
import { EducationTimeline } from "@/components/education-timeline";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { NowStrip } from "@/components/now-strip";
import { SelectedWork } from "@/components/selected-work";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <NowStrip />
      <EducationTimeline />
      <Experience />
      <SelectedWork />
      <Credentials />
      <Footer />
    </main>
  );
}
