import Image from "next/image";

interface ServiceCard {
  title: string;
  description: string;
  imageUrl: string;
  gradientFrom: string; // Bottom color
  gradientVia: string; // Middle color
  gradientTo: string; // Top color
}

const services: ServiceCard[] = [
  {
    title: "Highly Qualified Doctors",
    description:
      "Our team of certified and experienced doctors ensures the best care tailored to your needs.",
    imageUrl: "/doctor-5.jpg",
    gradientFrom: "from-blue-100/10", // Bottom color
    gradientVia: "via-blue-100/20", // Middle color
    gradientTo: "to-blue-500", // Top color
  },
  {
    title: "Emergency Care Services",
    description:
      "Round-the-clock emergency care available for urgent medical situations, ensuring immediate attention when it matters most.",
    imageUrl: "/doctor-3.avif",
    gradientFrom: "from-red-100/10", // Bottom color
    gradientVia: "via-red-100/20", // Middle color
    gradientTo: "to-red-600", // Top color
  },
  {
    title: "Modern Equipment",
    description:
      "Our team of certified and experienced doctors ensure the best care tailored to your needs.",
    imageUrl: "/doctors-2.jpg",
    gradientFrom: "from-green-100/10", // Bottom color
    gradientVia: "via-green-300/10", // Middle color
    gradientTo: "to-green-600", // Top color
  },
  {
    title: "24/7 Ambulance Services",
    description:
      "Swift and reliable ambulance services equipped with advanced life-support systems, ensuring timely.",
    imageUrl: "/doctor-6.jpg",
    gradientFrom: "from-yellow-100/10", // Bottom color
    gradientVia: "via-yellow-100/10", // Middle color
    gradientTo: "to-yellow-600", // Top color
  },
];

export default function MedicalServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 w-full max-w-7xl mx-auto px-4 mt-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative h-[250px] rounded-[10%] md:rounded-[15%] overflow-hidden group cursor-pointer shadow-md"
        >
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {/* Three-Color Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${service.gradientFrom} ${service.gradientVia} ${service.gradientTo}`}
          />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-sm opacity-90 line-clamp-2">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
