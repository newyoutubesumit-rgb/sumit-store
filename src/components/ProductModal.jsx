import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp, FaStar } from "react-icons/fa";

function ProductModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999]"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: .8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .8,
            }}
            transition={{
              duration: .35,
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-5xl bg-[#101010] rounded-[35px] border border-yellow-500/20 overflow-hidden z-[1000]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-red-500 duration-300"
            >
              <FaTimes className="mx-auto" />
            </button>

            <div className="grid lg:grid-cols-2">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover min-h-[500px]"
              />

              <div className="p-10">

                <span className="bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full text-yellow-500">
                  {product.category}
                </span>

                <h2 className="text-5xl font-black text-white mt-6">
                  {product.name}
                </h2>

                <div className="flex gap-1 text-yellow-500 mt-6">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="text-yellow-500 text-4xl font-bold mt-8">
                  {product.price}
                </p>

                <p className="text-gray-400 leading-9 mt-8">
                  Premium quality product available at
                  Sumit Store. Genuine quality,
                  affordable price and trusted service.
                </p>

                <a
                  href={`https://wa.me/916230671572?text=Hello, I want to buy ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 flex justify-center items-center gap-3 bg-green-500 text-white py-4 rounded-full text-lg font-bold hover:scale-105 duration-300"
                >
                  <FaWhatsapp />

                  Order on WhatsApp
                </a>

              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProductModal;