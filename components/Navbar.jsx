"use client";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { Hexagon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const navItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/services",
      title: "Services",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];
  const { userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  // In case the user signs out while on the page.
  // if (!isLoaded || !userId) {
  //   return <p>Login</p>;
  // }
  console.log(user);
  const pathname = usePathname();
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Hexagon />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Desishub
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              href="/sign-in"
            >
              Login
            </Link>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                    }`}
                    aria-current="page"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
