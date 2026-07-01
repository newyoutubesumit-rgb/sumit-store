import { useMemo, useState } from "react";
import {
  FaSearch,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { products } from "../data/products";

const categories = [
    "All",
    "Notebooks",
  ];


function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
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

              <div className="overflow-hidden relative">

<span className="absolute top-4 left-4 z-10 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
  ⭐ Best Seller
</span>

<img
  src={item.image}
  alt={item.name}
  className="h-72 w-full object-contain bg-white p-2 group-hover:scale-105 duration-700"
/>

</div>

              </div>

              <div className="p-7">

                <span className="inline-block bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 text-sm">

                  {item.category}

                </span>

                <h3 className="text-2xl font-bold text-white mt-5">

                  {item.name}

                </h3>
                <div className="flex items-center gap-2 mt-3">
  <span className="w-3 h-3 bg-green-500 rounded-full"></span>

  <span className="text-green-400 text-sm font-semibold">
    In Stock
  </span>
</div>
                <div className="flex flex-wrap gap-2 mt-4">
  {item.subjects?.map((subject) => (
    <span
      key={subject}
      className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm"
    >
      {subject}
    </span>
  ))}
</div>

                <div className="flex items-center gap-1 text-yellow-500 mt-3">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>
                <p className="text-gray-400 mt-4 text-sm leading-6">
  {item.description}
</p>

                <div className="mt-5">
  <p className="text-gray-500 line-through text-lg">
    ₹{item.originalPrice}
  </p>

  <div className="flex items-center gap-3">
    <p className="text-yellow-500 text-3xl font-bold">
      ₹{item.price}
    </p>

    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
      SAVE ₹5
    </span>
  </div>
</div>

<button
  onClick={() => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  }}
  className="w-full mb-4 py-4 rounded-full border border-yellow-500 text-yellow-400 font-bold hover:bg-yellow-500 hover:text-black transition duration-300"
>
  View Details
</button>
<a
                  href={`https://wa.me/916230671572?text=${encodeURIComponent(item.whatsappMessage)}`}
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
        {isModalOpen && selectedProduct && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setIsModalOpen(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-[#111] border border-yellow-500 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6"
    >
      <button
        onClick={() => setIsModalOpen(false)}
        className="float-right text-2xl text-white"
      >
        ✕
      </button>

      <img
  src={selectedProduct.image}
  alt={selectedProduct.name}
  className="w-full h-80 object-contain bg-white rounded-2xl p-3"
/>

      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6">
        {selectedProduct.name}
      </h2>

      <p className="text-gray-400 mt-3">
        {selectedProduct.description}
      </p>

      <div className="flex items-center gap-3 mt-5">
        <span className="line-through text-gray-500">
          ₹{selectedProduct.originalPrice}
        </span>

        <span className="text-3xl font-bold text-yellow-500">
          ₹{selectedProduct.price}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {selectedProduct.subjects.map((sub) => (
          <span
            key={sub}
            className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400"
          >
            {sub}
          </span>
        ))}
      </div>

      <a
        href={`https://wa.me/916230671572?text=${encodeURIComponent(
          selectedProduct.whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 flex justify-center items-center bg-green-500 text-white py-4 rounded-full font-bold"
      >
        Order on WhatsApp
      </a>
    </div>
  </div>
)}
      </div>
    </section>
  );
}

export default Products;