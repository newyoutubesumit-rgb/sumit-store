import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#080808] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[6px] text-yellow-500">
            Contact
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-5">
            Visit{" "}
            <span className="text-yellow-500">
              SUMIT STORE
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We'd love to welcome you to our store.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-[30px] p-8"
          >

            <div className="space-y-8">

              <a
                href="tel:6230671572"
                className="flex items-center gap-5 hover:translate-x-2 transition"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>

                  <h3 className="text-white text-xl font-semibold">
                    +91 6230671572
                  </h3>
                </div>
              </a>

              <a
                href="https://wa.me/916230671572"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 hover:translate-x-2 transition"
              >
                <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-gray-400">WhatsApp</p>

                  <h3 className="text-white text-xl font-semibold">
                    Chat Now
                  </h3>
                </div>
              </a>

              <a
                href="mailto:sumitstationary2007@gmail.com"
                className="flex items-center gap-5 hover:translate-x-2 transition"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>

                  <h3 className="text-white text-lg break-all">
                    sumitstationary2007@gmail.com
                  </h3>
                </div>
              </a>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-xl">
                  <FaLocationDot />
                </div>

                <div>
                  <p className="text-gray-400">Address</p>

                  <h3 className="text-white leading-8">
                    Badehar, Mohanghatti
                    <br />
                    District Mandi
                    <br />
                    Himachal Pradesh - 175032
                  </h3>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] border border-yellow-500/20"
          >

            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Mandi,Himachal%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[520px]"
              loading="lazy"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;