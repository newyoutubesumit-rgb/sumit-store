import { motion } from "framer-motion";

function MagneticButton({
  children,
  className = "",
  href,
  onClick,
}) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{
        scale: 1.06,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
      }}
      className={`relative overflow-hidden rounded-full font-bold ${className}`}
    >
      <span className="relative z-10">
        {children}
      </span>

      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent hover:translate-x-full duration-700"></span>
    </Component>
  );
}

export default MagneticButton;