import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo */}

        <div>

          <h2 className="text-4xl font-black">
            <span className="text-yellow-500">
              SUMIT
            </span>{" "}
            <span className="text-white">
              STORE
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Premium Stationery,
            School Supplies,
            School Bags,
            Footwear,
            Toys,
            Gift Items &
            Mobile Accessories.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-white text-2xl font-bold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a href="#home" className="hover:text-yellow-500 duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-yellow-500 duration-300">
                Products
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-yellow-500 duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#reviews" className="hover:text-yellow-500 duration-300">
                Reviews
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-500 duration-300">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-white text-2xl font-bold mb-6">
            Contact
          </h3>

          <div className="space-y-5">

            <a
              href="tel:6230671572"
              className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 duration-300"
            >
              <FaPhoneAlt />
              +91 6230671572
            </a>

            <a
              href="mailto:sumitstationary2007@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-yellow-500 duration-300 break-all"
            >
              <FaEnvelope />
              sumitstationary2007@gmail.com
            </a>

            <a
              href="https://wa.me/916230671572"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-green-500 duration-300"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>

        {/* Opening Hours */}

        <div>

          <h3 className="text-white text-2xl font-bold mb-6">
            Opening Hours
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>Monday - Saturday</p>

            <p className="text-white">
              9:00 AM - 8:00 PM
            </p>

            <p>Sunday</p>

            <p className="text-white">
              10:00 AM - 5:00 PM
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-yellow-500/30 flex justify-center items-center text-white hover:bg-yellow-500 hover:text-black duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-yellow-500/30 flex justify-center items-center text-white hover:bg-yellow-500 hover:text-black duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-yellow-500/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} SUMIT STORE. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center">
            Designed with ❤️ by Sumit
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;