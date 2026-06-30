import {
    FaBook,
    FaShoePrints,
    FaGift,
    FaSchool,
    FaMobileAlt,
    FaPenFancy,
  } from "react-icons/fa";
  
  const categories = [
    {
      icon: <FaBook size={40} />,
      title: "Stationery",
      desc: "Notebooks, Pens & Office Supplies",
    },
    {
      icon: <FaSchool size={40} />,
      title: "School Bags",
      desc: "Stylish & Durable School Bags",
    },
    {
      icon: <FaShoePrints size={40} />,
      title: "Shoes",
      desc: "School & Casual Footwear",
    },
    {
      icon: <FaGift size={40} />,
      title: "Gift Items",
      desc: "Beautiful Gifts for Every Occasion",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Accessories",
      desc: "Mobile Accessories & Chargers",
    },
    {
      icon: <FaPenFancy size={40} />,
      title: "Art Supplies",
      desc: "Colors, Sketches & Drawing Kits",
    },
  ];
  
  function Categories() {
    return (
      <section className="bg-[#070707] py-24">
  
        <div className="max-w-7xl mx-auto px-8">
  
          <h2 className="text-center text-5xl font-bold text-white">
            Our <span className="text-yellow-500">Categories</span>
          </h2>
  
          <p className="text-center text-gray-400 mt-4 mb-16">
            Everything you need under one roof.
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {categories.map((item, index) => (
  
              <div
                key={index}
                className="bg-zinc-900 border border-yellow-500/20 rounded-3xl p-8 hover:-translate-y-3 hover:border-yellow-500 duration-300 shadow-xl"
              >
  
                <div className="text-yellow-500 mb-6">
                  {item.icon}
                </div>
  
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
  
                <p className="text-gray-400 mt-3">
                  {item.desc}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Categories;