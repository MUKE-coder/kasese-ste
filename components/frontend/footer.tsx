import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import ThemeButton from "./theme-button";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 px-4 md:px-8 lg:px-16 rounded-t-3xl">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Let's Connect with us
          </h2>
          <p className="text-gray-400 max-w-xl text-base">
            We're here to provide reliable healthcare information and services.
            Let's build a healthier future together.
          </p>
        </div>
        <div className="flex gap-4 md:flex-row flex-col">
          <button className="px-6 md:!py-1 py-3 border border-gray-600 rounded-full hover:border-gray-400 transition-colors">
            Contact Us
          </button>

          <ThemeButton href="" title="   Make an Inquiry" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-4">
            <Logo />
            <div className="flex flex-col">
              <h3 className="text-base font-semibold mb-4">
                Social Media Links
              </h3>

              <div className="flex">
                {[
                  "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
                  "https://cdn-icons-png.flaticon.com/128/3670/3670151.png",
                  "https://cdn-icons-png.flaticon.com/128/145/145807.png",
                  "https://cdn-icons-png.flaticon.com/128/3670/3670176.png",
                ].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center   hover:bg-transparent transition-colors"
                  >
                    <Image
                      src={social}
                      alt={`${social} icon`}
                      width={25}
                      height={25}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Departments",
                "Meet the Team",
                "Testimonials",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "General Medicine",
                "Pediatrics",
                "Cardiology",
                "Neurology",
                "Orthopedics",
                "Dermatology",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Phone: +123 456 7890</li>
              <li className="text-gray-400  text-sm">
                Email: support@medease.com
              </li>
              <li className="text-gray-400 text-sm">
                Address:
                <br />
                123 Health Street,
                <br />
                Wellness City, 56789
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024{" "}
            <Link href="/" className="hover:text-white">
              MedEase
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white ml-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white ml-2">
              Terms & Conditions
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white ml-2">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
