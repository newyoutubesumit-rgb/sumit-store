import { useMemo, useState } from "react";
import {
  FaSearch,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    name: "Premium Notebook",
    price: "₹120",
    category: "Stationery",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900",
  },
  {
    name: "Luxury Pen Set",
    price: "₹350",
    category: "Stationery",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900",
  },
  {
    name: "School Bag",
    price: "₹899",
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=900",
  },
  {
    name: "Sports Shoes",
    price: "₹1499",
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
  },
  {
    name: "Gift Item",
    price: "₹499",
    category: "Gift",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=900",
  },
  {
    name: "Colour Kit",
    price: "₹280",
    category: "Art",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900",
  },
];

const categories = [
  "All",
  "Stationery",
  "Bags",
  "Shoes",
  "Gift",
  "Art",
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((item) => {
      const name = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const cat =
        category === "All"
          ? true
          : item.category === category;

      return name && cat;
    });
  }, [search, category]);

  return (
    <section
      id="products"
      className="bg-[#050505] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center"
        >
          <span className="text-white">
            Featured
          </span>{" "}
          <span className="text-yellow-500">
            Products
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-12">
          Explore our premium collection.
        </p>

        {/* Search */}

        <div className="max-w-xl mx-auto relative mb-10">

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search Products..."
            className="w-full bg-[#111] border border-yellow-500/20 rounded-full pl-14 pr-6 py-4 outline-none text-white focus:border-yellow-500 transition"
          />

        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full transition ${
                category === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-[#111] text-white border border-yellow-500/20 hover:border-yellow-500"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {filtered.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .4,
              }}
              className="group rounded-[30px] overflow-hidden bg-[#111] border border-yellow-500/20 hover:border-yellow-500"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover group-hover:scale-110 duration-700"
                />

              </div>

              <div className="p-7">

                <span className="inline-block bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 text-sm">

                  {item.category}

                </span>

                <h3 className="text-2xl font-bold text-white mt-5">

                  {item.name}

                </h3>

                <div className="flex items-center gap-1 text-yellow-500 mt-3">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <p className="text-yellow-500 text-3xl font-bold mt-5">

                  {item.price}

                </p>

                <a
                  href={`https://wa.me/916230671572?text=Hello, I am interested in ${item.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 flex justify-center items-center gap-3 bg-green-500 py-4 rounded-full font-bold text-white hover:scale-[1.03] duration-300"
                >

                  <FaWhatsapp />

                  Enquire on WhatsApp

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;