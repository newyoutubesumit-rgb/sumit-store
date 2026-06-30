import { motion } from "framer-motion";
import {
  FaAward,
  FaUsers,
  FaStore,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaStore />,
    title: "One Stop Shop",
    desc: "Everything from stationery to shoes and accessories under one roof.",
  },
  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc: "We provide trusted brands and genuine quality products.",
  },
  {
    icon: <FaUsers />,
    title: "Trusted Since 2020",
    desc: "Serving students, families and professionals with dedication.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Customer Satisfaction",
    desc: "Friendly service, affordable prices and a great shopping experience.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-[#080808] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="text-yellow-500 tracking-[6px] uppercase">
            About Us
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-5">

            Welcome To

            <span className="text-yellow-500">
              {" "}SUMIT STORE
            </span>

          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 leading-9 text-lg">

            Sumit Store has been serving customers since 2020.
            We provide premium stationery, school supplies,
            office essentials, school bags, footwear,
            toys, gift items and mobile accessories at
            affordable prices.

            Our mission is simple —
            quality products, honest pricing and excellent customer service.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-[30px] border border-yellow-500/20 p-8 text-center hover:border-yellow-500 transition-all duration-300"
            >

              <div className="w-20 h-20 rounded-full bg-yellow-500 text-black flex items-center justify-center text-3xl mx-auto">

                {item.icon}

              </div>

              <h3 className="text-white text-2xl font-bold mt-8">

                {item.title}

              </h3>

              <p className="text-gray-400 leading-8 mt-5">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;