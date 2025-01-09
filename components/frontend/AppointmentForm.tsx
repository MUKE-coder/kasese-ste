"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Calendar, Clock, MapPin } from "lucide-react";
import WavyBackground from "./WavyBackground";

const services = [
  "General Consultation",
  "Pediatrics",
  "Obstetrics & Gynecology",
  "Dental Care",
  "Eye Care",
  "Orthopedics",
  "Internal Medicine",
  "Laboratory Services",
];

const timeSlots = [
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
];

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  appointmentDate: string;
  preferredTime: string;
  additionalInfo: string;
}

export default function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>();

  const onSubmit = (data: AppointmentFormData) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <WavyBackground
      waveColor="rgba(167, 243, 208, 0.2)"
      baseColor="rgb(240, 253, 244)"
      className="py-16"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment Today
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to schedule your visit with our expert team.
            <br />
            We're here to help you stay healthy!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Form Section */}
          <div className="bg-white/80 backdrop-blur-sm md:p-8 rounded-2xl shadow-lg p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    {...register("service", {
                      required: "Please select a service",
                    })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Date Field */}
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Appointment Date
                  </label>
                  <input
                    {...register("appointmentDate", {
                      required: "Please select a date",
                    })}
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  {errors.appointmentDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.appointmentDate.message}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                <div className="col-span-full md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    {...register("preferredTime", {
                      required: "Please select a time",
                    })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.preferredTime.message}
                    </p>
                  )}
                </div>

                {/* Additional Information */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    {...register("additionalInfo")}
                    rows={4}
                    placeholder="Enter any special requests or details..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="col-span-2 bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  Schedule My Appointment
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-emerald-900 text-white p-8 rounded-2xl relative overflow-hidden h-full">
            <div className="relative z-10 h-full flex flex-col justify-end items-end">
              <div className="">
                <h3 className="text-2xl font-semibold mb-2">
                  Your First Step to Better Health
                </h3>
                <h2 className="text-4xl font-bold mb-6">
                  Get 10% Off Your First Appointment!
                </h2>

                {/* Location and Hours */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                      <p className="font-medium">123 Health Street</p>
                      <p className="text-emerald-200">Wellness City, 56789</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 mt-1" />
                    <div>
                      <p className="font-medium">
                        Monday-Saturday: 8:30am-10:00pm
                      </p>
                      <p className="text-emerald-200">Sunday: 9:30am-10:00pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}
