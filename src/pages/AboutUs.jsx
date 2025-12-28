import React from 'react';
import aboutUs from '../assets/aboutus.jpg';
import cross from '../assets/cross.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import crew from '../assets/american-crew.webp';
import dyson from '../assets/dyson.webp';
import loreal from '../assets/Loreal.webp';
import kerastase from '../assets/Kerastase.webp';
import brasil from '../assets/main-brasil-cacau.webp';
import olaplex from '../assets/olaplex.webp';
import { motion } from "framer-motion";


function AboutUs() {
  const brands = [loreal, kerastase, olaplex, crew, dyson, brasil];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative bg-cover bg-top md:bg-center md:bg-fixed h-60 sm:h-80 md:h-[550px] flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutUs})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center bg-yellow-200/50 p-3 sm:p-5 md:p-7 rounded-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-20">
          Your beauty, our passion..!
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-4 sm:px-6 md:px-10 mt-6 sm:mt-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Our Story</h2>
        <p className="text-center mt-2 font-medium text-sm sm:text-base md:text-lg lg:text-xl text-cyan-900 leading-relaxed">
          Our journey began with a passion for beauty and a commitment to excellence. At LuxeCuts, we combine skilled artistry with a luxurious experience, transforming<br />
          every visit into more than just a service—it’s a celebration of style, confidence, and individuality.<br />
          LuxeCuts Salon is one of the most powerful and fastest growing salon chain brand PanIndia, that has given the hairstyling industry a new horizon.<br />
          Emerging as the largest single salon chain in the country.
        </p>
      </motion.section>

      {/* Corporate Vision & Customer Promise */}
      <section
      className="flex flex-col lg:flex-row justify-center items-center mt-12 bg-gray-100 p-6 sm:p-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-center">
          <h1 className="font-bold text-2xl sm:text-3xl mb-4">Corporate Vision</h1>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            Our vision is to be a premier destination for beauty and style, where every client feels confident and radiant. We strive to set the standard in the industry through creativity, excellence, and personalized care. Our mission is to deliver exceptional salon experiences that inspire self-expression, well-being, and lasting beauty.
          </p>
        </motion.div>

        <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }} className="flex-shrink-0">
          <img src={cross} alt="decorative" className="w-24 sm:w-32 md:w-40" />
        </motion.div>

        <motion.div  initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }} className="flex-1 text-center">
          <h1 className="font-bold text-2xl sm:text-3xl mb-4">Customer Promise</h1>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            We promise to treat every client with care, respect, and personalized attention. Our goal is to deliver exceptional services that leave you looking your best and feeling confident. We are committed to creating a welcoming, relaxing environment where your satisfaction is always our top priority.
          </p>
        </motion.div>
      </section>

      {/* Partner Brands */}
      <section className="flex flex-col justify-center items-center py-12 sm:py-16 px-4 sm:px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Our Partner Brands</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 border-t border-l border-dashed">
          {brands.map((logo, index) => (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.3 }}
              key={index}
              className="h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] w-full flex items-center justify-center border-b border-r border-dashed p-4 sm:p-6 hover:-translate-y-1 transition transform duration-300"
            >
              <img src={logo} alt="brand" className="max-h-[100px] sm:max-h-[120px] md:max-h-[140px] lg:max-h-[150px] object-contain" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
      initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}>
        <div className="bg-yellow-500 text-center p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">LuxeCuts Salon</h1>
          <p className="mt-4 font-medium text-sm sm:text-base md:text-lg">
            The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks and absolute luxury.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <FaFacebookF className="border-2 border-gray-500 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white w-10 h-10 p-2 transition" />
            <FaTwitter className="border-2 border-gray-500 rounded-full cursor-pointer hover:bg-sky-500 hover:text-white w-10 h-10 p-2 transition" />
            <FaInstagram className="border-2 border-gray-500 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white w-10 h-10 p-2 transition" />
          </div>
        </div>
        <p className="text-center mt-4 mb-6 text-sm sm:text-base">&copy; 2025, LuxeCuts Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
