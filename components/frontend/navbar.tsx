"use client";
// components/Navbar/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeButton from "./theme-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#f0fdf4] shadow-sm rounded-none  md:rounded-full md:border border-b border-green-200 mx-0 md:mx-8 md:my-4 my-0">
      <div className="max-w-7xl mx-auto px-4  ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-gray-600 hover:text-green-800 transition-colors",
                  {
                    "text-green-800 font-bold bold-heading ":
                      item.href !== "/" && // Exclude home path
                      (item.href === pathname || // Exact match
                        (pathname.includes(item.href) && item.href.length > 1)), // Nested routes, but only if href is not "/"
                  }
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <ThemeButton title="Book Appointment" href="/book-appointment" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 bg-white rounded-full hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-gray-600 hover:text-green-600 transition-colors",
                  item.href === pathname && "text-green-800 font-bold "
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ThemeButton title="Book Appointment" href="/book-appointment" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
