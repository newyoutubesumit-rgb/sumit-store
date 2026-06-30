// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: .7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-black/80 border-b border-yellow-500/20 shadow-2xl py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="group"
          >
            <h1 className="text-3xl font-black tracking-[4px]">
              <span className="text-yellow-500 group-hover:drop-shadow-[0_0_15px_#D4AF37] duration-300">
                SUMIT
              </span>{" "}
              <span className="text-white">
                STORE
              </span>
            </h1>

            <p className="text-[11px] tracking-[5px] text-gray-400 mt-1">
              SINCE 2020
            </p>
          </a>

          {/* Desktop */}

          <ul className="hidden lg:flex items-center gap-10">

            {links.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  className="relative text-white hover:text-yellow-500 duration-300 font-medium after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 hover:after:w-full after:bg-yellow-500 after:duration-300"
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-4">

            <a
              href="tel:6230671572"
              className="w-11 h-11 rounded-full border border-yellow-500/30 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black hover:scale-110 duration-300"
            >
              <FaPhoneAlt />
            </a>

            <a
              href="https://wa.me/916230671572"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:scale-105 duration-300"
            >
              <div className="flex items-center gap-2">
                <FaWhatsapp />
                WhatsApp
              </div>
            </a>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-3xl"
          >
            <FaBars />
          </button>

        </div>
      </motion.nav>

      {/* Overlay */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            onClick={()=>setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />

        )}

      </AnimatePresence>

      {/* Drawer */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ x:"100%" }}
            animate={{ x:0 }}
            exit={{ x:"100%" }}
            transition={{
              type:"spring",
              stiffness:120,
              damping:18
            }}
            className="fixed right-0 top-0 h-screen w-[320px] bg-[#080808] border-l border-yellow-500/20 z-50"
          >

            <div className="flex items-center justify-between p-7 border-b border-yellow-500/20">

              <h2 className="text-2xl font-black">

                <span className="text-yellow-500">
                  SUMIT
                </span>{" "}

                <span className="text-white">
                  STORE
                </span>

              </h2>

              <button
                onClick={()=>setOpen(false)}
                className="text-white text-3xl"
              >
                <FaTimes/>
              </button>

            </div>

            <div className="flex flex-col mt-8">

              {links.map((item)=>(
                <a
                  key={item.name}
                  href={item.href}
                  onClick={()=>setOpen(false)}
                  className="px-8 py-5 text-white text-lg hover:bg-yellow-500 hover:text-black duration-300"
                >
                  {item.name}
                </a>
              ))}

            </div>

            <div className="absolute bottom-10 left-0 w-full px-8">

              <a
                href="https://wa.me/916230671572"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-3 bg-green-500 text-white py-4 rounded-full font-bold hover:scale-105 duration-300"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default Navbar;