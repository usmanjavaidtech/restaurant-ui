import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="p-4 md:p-6 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* CARD */}
      <div className="w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative h-64 md:h-auto md:w-1/2">
          <Image
            src="/loginBg.png"
            alt="Login Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* FORM CONTAINER */}
        <div className="p-8 md:p-12 flex flex-col justify-center gap-8 md:w-1/2">
          {/* HEADER */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Welcome
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Log into your account or create a new one using social buttons
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-lg border-2 border-gray-200 hover:border-red-500 hover:bg-red-50 transition-all duration-300 font-semibold text-gray-800 hover:text-red-600 group">
              <FaGoogle className="text-xl text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <span>Sign in with Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold text-gray-800 hover:text-blue-600 group">
              <FaFacebook className="text-xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span>Sign in with Facebook</span>
            </button>
          </div>

          {/* FOOTER LINK */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Have a problem?{" "}
              <Link
                href="#contact"
                className="text-red-500 font-semibold hover:text-red-600 hover:underline transition-colors duration-300"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
