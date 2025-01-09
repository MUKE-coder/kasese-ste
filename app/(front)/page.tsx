import DepartmentComponent from "@/components/frontend/departments-component";
import HeroSection from "@/components/frontend/hero";
import MedicalServices from "@/components/frontend/medical-services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <MedicalServices />
      <DepartmentComponent />
    </main>
  );
}
