import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { PanAfricanSection } from "@/components/sections/PanAfricanSection";
import { ReachSection } from "@/components/sections/ReachSection";
import { DrivesSection } from "@/components/sections/DrivesSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <Divider />
      <PillarsSection />
      <Divider />
      <SectorsSection />
      <Divider />
      <PanAfricanSection />
      <Divider />
      <ReachSection />
      <Divider />
      <DrivesSection />
      <CtaBand />
      <ContactSection />
      <Footer />
    </>
  );
}
