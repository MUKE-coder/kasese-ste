import DepartmentComponent from "@/components/frontend/departments-component";
import GuideComponent from "@/components/frontend/guide-component";
import HeroSection from "@/components/frontend/hero";
import MedicalServices from "@/components/frontend/medical-services";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <MedicalServices />
      <DepartmentComponent />
      <GuideComponent/>
    </main>
  );
}
