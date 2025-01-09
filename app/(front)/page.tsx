import DepartmentComponent from "@/components/frontend/departments-component";
import MedicalServices from "@/components/frontend/medical-services";

export default function Home() {
  return (
    <div>
      <MedicalServices/>
      <DepartmentComponent/>
    </div>
  );
}
