import React from 'react';

const DepartmentComponent = () => {
  const services = [
    {
      id: 1,
      title: 'Cardiology',
      description: 'Expert heart care, from routine check-ups to advanced cardiac treatments.',
      image: '/doctor-8.jpg',
    },
    {
      id: 2,
      title: 'Neurology',
      description: 'Advanced care for brain, spine, and nervous system conditions.',
      image: '/doctor-10.avif',
    },
    {
      id: 3,
      title: 'Dermatology',
      description: 'Offering specialized skin care treatments for all age groups, ensuring healthy.',
      image: '/doctor-9.jpg',
    },
    {
      id: 4,
      title: 'Orthopedics',
      description: 'Comprehensive bone and joint care to keep you moving pain-free.',
      image: '/doctors-2.jpg',
    },
    {
      id: 5,
      title: 'Gynecology & Obstetrics',
      description: 'Comprehensive women’s health services and expert maternity care.',
      image: '/braain.jpg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-10">
      <div className="text-center mb-5">
        <h2 className="md:text-3xl text-xl font-bold mb-3">
          Dedicated Departments Providing Exceptional Care
        </h2>
        <p className="text-gray-600 md:max-w-xl text-center mx-auto text-sm">
          Bringing Together Expertise and Innovation to Provide Specialized Care for Every Patient's Needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* First Small Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-md group h-72  cursor-pointer">
          <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[0].image}
              alt={services[0].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 via-yellow-100/10 to-green-900  group-hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">{services[0].title}</h3>
              <p className="text-sm opacity-90">{services[0].description}</p>
            </div>
          </div>

          {/* Second Small Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-md group h-72 cursor-pointer">
          <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[3].image}
              alt={services[3].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 via-yellow-100/10 to-green-900 group-hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">{services[3].title}</h3>
              <p className="text-sm opacity-90">{services[3].description}</p>
            </div>
          </div>
        </div>

        {/* Center Large Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-md group h-[100%] md:h-[100%] cursor-pointer">
        <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          <img
            src={services[1].image}
            alt={services[1].title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 via-yellow-100/10 to-green-900 group-hover:opacity-0 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-1">{services[1].title}</h3>
            <p className="text-sm opacity-90">{services[1].description}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 cursor-pointer">
          {/* First Small Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-md group h-72">
          <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[2].image}
              alt={services[2].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 via-yellow-100/10 to-green-900 group-hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">{services[2].title}</h3>
              <p className="text-sm opacity-90">{services[2].description}</p>
            </div>
          </div>

          {/* Second Small Card */}
          <div className="relative overflow-hidden rounded-3xl shadow-md group h-72 cursor-pointer">
          <div className="absolute top-4 right-4 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-gray-600"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img
              src={services[4].image}
              alt={services[4].title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/10 via-yellow-100/10 to-green-900 group-hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-bold mb-1">{services[4].title}</h3>
              <p className="text-sm opacity-90">{services[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
