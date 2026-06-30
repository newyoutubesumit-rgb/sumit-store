import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp */}

      <motion.a
        href="https://wa.me/916230671572"
        target="_blank"
        rel="noreferrer"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 shadow-[0_0_30px_rgba(34,197,94,.45)] flex justify-center items-center text-white text-3xl"
      >
        <FaWhatsapp />
      </motion.a>

      {/* Scroll To Top */}

      <AnimatePresence>

        {showTop && (

          <motion.button
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 40,
            }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={scrollTop}
            className="fixed bottom-28 right-6 z-50 w-14 h-14 rounded-full bg-yellow-500 text-black shadow-[0_0_30px_rgba(212,175,55,.45)] flex justify-center items-center text-xl"
          >

            <FaArrowUp />

          </motion.button>

        )}

      </AnimatePresence>
    </>
  );
}

export default WhatsAppButton;