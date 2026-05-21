import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://facebook.com/usmanjavaidtech",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/usmanjavaidtech",
      color: "hover:text-pink-600",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/usmanjavaidtech",
      color: "hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/muhammad-usman-javaid",
      color: "hover:text-blue-700",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:usmanjavaidtech@gmail.com",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-50 to-white border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 xl:px-40 py-12 md:py-16">
        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
          {/* BRAND SECTION */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block w-fit"
            >
              MASSIMO
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Delicious food delivered to your doorstep. Premium quality, fresh ingredients, and exceptional taste.
            </p>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-800">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 text-gray-600 transition-all duration-300 ${social.color} hover:bg-red-50 hover:scale-110`}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* BOTTOM SECTION */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">
            © {currentYear} MASSIMO. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built with ❤️ by{" "}
            <a
              href="https://github.com/usmanjavaidtech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 font-semibold hover:underline"
            >
              Usman Javaid
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
