import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <div className="text-green-800 text-xl">🩺</div>
        </div>
        <span className="text-xl font-semibold text-gray-900">MedEase</span>
      </Link>
    </div>
  );
}
