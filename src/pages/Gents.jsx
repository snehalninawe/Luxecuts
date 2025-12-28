import React from 'react';
import { NavLink } from 'react-router-dom';
import gents1 from '../assets/service-men-1.jpg';
import gents2 from '../assets/serviceGents.jpg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion";


function Gents() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.9 }} 
 className="w-full">

      {/* Breadcrumb Navigation */}
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }} className='text-center text-xl sm:text-2xl md:text-4xl text-yellow-600 flex justify-center items-center gap-3 mt-3 flex-wrap'>
        <NavLink
          to="/services/ladies"
          className={({ isActive }) =>
            isActive ? "text-yellow-600" : "text-black hover:text-yellow-700"
          }
        >
          Ladies
        </NavLink>
        <p className='text-black'>/</p>
        <NavLink
          to="/services/gents"
          className={({ isActive }) =>
            isActive ? "text-yellow-600" : "text-black hover:text-yellow-700"
          }
        >
          Gents
        </NavLink>
      </motion.div>

      {/* Hero Image */}
      <motion.img src={gents1} alt="Gents Services" className="w-full object-cover mt-4" 
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}/>

      {/* Services Section 1 */}
      <section className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 md:px-10">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {/* Hair Cut & Finish */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hair Cut & Finish</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-base md:text-base">
              <li>Cut and Hair Care</li>
              <li>Shampoo & Conditioning</li>
              <li>Head Massage</li>
              <li>Blow Dry</li>
              <li>Beard Styling</li>
              <li>Hair/Beard Colouring</li>
              <li>Oiling</li>
            </ul>
          </div>

          {/* Hair Colour */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hair Colour</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Hair Colour (Ammonia / Ammonia Free)</li>
              <li>Hi-Lites</li>
              <li>Beard Colour</li>
            </ul>
          </div>

          {/* Hair Texture */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hair Texture</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Rebonding</li>
              <li>Perming</li>
              <li>Smoothening</li>
              <li>Straightening</li>
            </ul>
          </div>

          {/* Hair Treatments */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hair Treatments</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Hair Spa</li>
              <li>Volumizing</li>
              <li>Colour Protection</li>
              <li>Advanced Moisturising</li>
              <li>Scalp Treatments</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Second Image */}
      <motion.img src={gents2} alt="Gents Services" className='w-full object-cover' 
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}/>

      {/* Services Section 2 */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-10 bg-gray-100">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Skin Care */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Skin Care</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Clean Ups</li>
              <li>Facials</li>
              <li>Organic Treatments</li>
              <li>Manicure</li>
              <li>Pedicure</li>
            </ul>
          </div>

          {/* Beard Grooming */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Beard Grooming</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Beard Trim</li>
              <li>Beard Colour</li>
              <li>Beard Styling</li>
              <li>Shave</li>
              <li>Luxury Shave & Beard Spa</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }} className='px-4 sm:px-6 md:px-10 mt-6 sm:mt-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Gents Salon Services</h2>
        <p className='font-medium mt-3 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-justify'>
          Styling has never been limited to women. The art of looking handsome and getting makeovers has its own story for men. LuxeCuts Salon provides a wide range of services and treatments. Our professionally trained stylists ensure you get the best look possible.
          <br/><br/>
          Our experts provide tips to maintain your style and offer guidance on trends. LuxeCuts is an award-winning salon chain with over 95 branches nationally and internationally. We use world-class products and technologies for all services.
          <br/><br/>
          Book your appointment today through our website or contact the nearest LuxeCuts Salon to experience a complete transformation.
        </p>
      </motion.div>

      {/* Footer */}
      <motion.footer
      initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }} className='mt-10'>
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
        <p className="text-center mt-4 mb-6 text-sm sm:text-base">&copy;2025, LuxeCuts Salon. All rights reserved.</p>
      </motion.footer>

    </motion.div>
  );
}

export default Gents;
