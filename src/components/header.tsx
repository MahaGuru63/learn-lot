import React from "react";
import Image from "next/image";
import "../styles/global.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <section className="px-14">
      <div className="flex items-center border-b-2">
        <div className="w-1/4 p-5">
          <a href="/">
            <Image
              src={logoImage.imageUrl}
              alt="Blog Image"
              width={300}
              height={300}
            />
          </a>
        </div>
        <div className="w-3/4">
          <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link
                        href="/"
                        className="bg-gray-900 text-white rounded-md px-3 py-2 text-lgfont-medium"
                        aria-current="page"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-lg"
                      >
                        About
                      </Link>
                      <Link
                        href="/blog"
                        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-lg"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/company"
                        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-lg"
                      >
                        Team
                      </Link>
                      <Link
                        href="/products"
                        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium relative group"
                      >
                        Products
                      </Link>
                      <Link
                        href="/solution"
                        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                      >
                        Solution
                      </Link>
                      <Link
                        href="/contact"
                        className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                  href="/"
                  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  Dashboard
                </Link>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Calendar
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

const logoImage = {
  title: "Example Blog Post",
  imageUrl: "/logo.svg", // Path to your image in the public directory
};

export default Header;
