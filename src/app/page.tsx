import AmbassadorCTA from "@/components/home/AmbassadorCTA";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Packages from "@/components/home/Packages";
import Results from "@/components/home/Results";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Results />
      <Packages />
      <AmbassadorCTA />
    </div>
  );
}
