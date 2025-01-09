import AppointmentForm from "@/components/frontend/AppointmentForm";
import DepartmentComponent from "@/components/frontend/departments-component";
import FAQ from "@/components/frontend/FAQ";
import GuideComponent from "@/components/frontend/guide-component";
import HeroSection from "@/components/frontend/hero";
import MedicalServices from "@/components/frontend/medical-services";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <MedicalServices />
      <DepartmentComponent />
      <AppointmentForm />
      <FAQ />
      <GuideComponent />
    </main>
  );
}
