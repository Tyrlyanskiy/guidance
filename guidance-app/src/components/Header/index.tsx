"use client";

import { IoIosHappy } from "react-icons/io";
import routes from "./routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-1">
      <Link href={"/"}>
        <IoIosHappy size={50} />
      </Link>

      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`px-2 py-1 hover:text-white transition rounded-sm ${
                  route.path === pathname
                    ? "bg-white/10 text-white"
                    : "text-white/80"
                }`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
