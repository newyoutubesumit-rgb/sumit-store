import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-36"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500">

            <FaStar />

            Trusted Since 2020

          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mt-8">

            <span className="text-white block">
              SUMIT
            </span>

            <span className="text-yellow-500 block mt-2">
              STORE
            </span>

          </h1>

          <p className="text-gray-400 text-xl leading-9 mt-10 max-w-xl">

            Everything you need under one roof.

            Premium Stationery,
            School Supplies,
            Shoes,
            Bags,
            Gift Items
            & Mobile Accessories.

          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <button className="group bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 duration-300 shadow-[0_0_30px_rgba(212,175,55,.35)]">

              <div className="flex items-center gap-3">

                Explore Products

                <FaArrowRight className="group-hover:translate-x-2 duration-300" />

              </div>

            </button>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black duration-300"
            >
              Contact Us
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 mt-20">

            {[
              {
                number: "5000+",
                title: "Customers",
              },
              {
                number: "1000+",
                title: "Products",
              },
              {
                number: "4.9★",
                title: "Rating",
              },
            ].map((item) => (

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
                key={item.title}
                className="rounded-3xl bg-white/5 border border-yellow-500/20 backdrop-blur-xl p-6 text-center"
              >

                <h2 className="text-yellow-500 text-4xl font-bold">

                  {item.number}

                </h2>

                <p className="text-gray-400 mt-2">

                  {item.title}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: .85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-[40px] bg-yellow-500/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200"
              alt="Store"
              className="relative rounded-[40px] border border-yellow-500/30 shadow-[0_0_70px_rgba(212,175,55,.25)]"
            />

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm tracking-[4px]"
      >

        SCROLL

      </motion.div>

    </section>
  );
}

export default Hero;