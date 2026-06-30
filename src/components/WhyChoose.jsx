import {
    FaAward,
    FaTruck,
    FaTags,
    FaSmile,
  } from "react-icons/fa";
  
  function WhyChoose() {
    return (
      <section className="bg-[#0a0a0a] py-24">
  
        <div className="max-w-7xl mx-auto px-8">
  
          <h2 className="text-5xl font-bold text-center text-white">
            Why Choose <span className="text-yellow-500">Us?</span>
          </h2>
  
          <p className="text-center text-gray-400 mt-5 mb-16">
            Trusted by hundreds of happy customers since 2020.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 duration-300 text-center">
  
              <FaAward className="text-5xl text-yellow-500 mx-auto mb-6"/>
  
              <h3 className="text-white text-2xl font-bold">
                Premium Quality
              </h3>
  
              <p className="text-gray-400 mt-4">
                Genuine products with trusted quality.
              </p>
  
            </div>
  
            <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 duration-300 text-center">
  
              <FaTags className="text-5xl text-yellow-500 mx-auto mb-6"/>
  
              <h3 className="text-white text-2xl font-bold">
                Best Prices
              </h3>
  
              <p className="text-gray-400 mt-4">
                Affordable prices on every product.
              </p>
  
            </div>
  
            <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 duration-300 text-center">
  
              <FaTruck className="text-5xl text-yellow-500 mx-auto mb-6"/>
  
              <h3 className="text-white text-2xl font-bold">
                Huge Collection
              </h3>
  
              <p className="text-gray-400 mt-4">
                Stationery, Shoes, Bags, Gifts & more.
              </p>
  
            </div>
  
            <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 hover:border-yellow-500 duration-300 text-center">
  
              <FaSmile className="text-5xl text-yellow-500 mx-auto mb-6"/>
  
              <h3 className="text-white text-2xl font-bold">
                Happy Customers
              </h3>
  
              <p className="text-gray-400 mt-4">
                Excellent service and customer support.
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default WhyChoose;