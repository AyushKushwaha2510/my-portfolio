"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <motion.div
            whileHover={{
              rotate: 180,
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-2 shadow-lg shadow-cyan-500/30"
          >
            <Cpu className="h-6 w-6 text-white" />
          </motion.div>

          <div>
            <h2 className="text-xl font-bold text-white">
              AYUSH
            </h2>

            <p className="-mt-1 text-xs tracking-[0.3em] text-cyan-400">
              AI.OS
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
          >
            Resume
          </Button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-slate-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}

              <Button className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}