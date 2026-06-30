import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Akshita Mahant",
    review:
      "Excellent collection of stationery and school supplies. The quality is outstanding and the staff is very helpful.",
  },
  {
    name: "Vishal Mahant",
    review:
      "Best shop in the area for stationery, school bags and footwear. Great prices and genuine products.",
  },
  {
    name: "Poonam Mahant",
    review:
      "A wonderful shopping experience. Everything is available at one place with excellent customer service.",
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#050505] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-yellow-500">
            Testimonials
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-5">
            Customer{" "}
            <span className="text-yellow-500">
              Reviews
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We believe customer satisfaction is our biggest achievement.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{ duration: .35 }}
              className="relative overflow-hidden rounded-[30px] border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-yellow-500"
            >

              {/* Glow */}

              <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-yellow-500/10 blur-[80px]" />

              <FaQuoteLeft className="text-yellow-500 text-4xl mb-6" />

              <p className="text-gray-300 leading-9 relative z-10">
                "{item.review}"
              </p>

              <div className="flex gap-1 text-yellow-500 mt-8">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-yellow-500 text-black flex items-center justify-center font-black text-xl">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h3 className="text-white font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Verified Customer
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;