import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 md:p-8 lg:px-20 xl:px-40 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex flex-col md:flex-row gap-6 items-stretch justify-center py-8 md:py-12">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative w-full h-72 md:h-[32rem] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 flex items-end"
          style={{ backgroundImage: `url(${category.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300"></div>

          {/* CONTENT */}
          <div className="relative z-10 w-full p-6 md:p-8 transform group-hover:-translate-y-2 transition-transform duration-300">
            <div className="w-full">
              <h1 className="uppercase font-black text-white text-2xl md:text-4xl mb-3 tracking-tight leading-tight">
                {category.title}
              </h1>
              <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed font-medium">
                {category.desc}
              </p>
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm md:text-base">
                Explore
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
