import Link from "next/link";

const ThemeButton = () => {
  return (
    <Link
      href="/book-appointment"
      className="inline-flex items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors"
    >
      Book Appointment
      <svg
        className="ml-2 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
};

export default ThemeButton;
