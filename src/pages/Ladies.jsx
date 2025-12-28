import React from 'react';
import { NavLink } from 'react-router-dom';
import ladies1 from '../assets/ladies-1.png';
import ladies2 from '../assets/ladies-2.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion";


function Ladies() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 0.9 }} className="w-full">

      {/* Navigation Breadcrumb */}
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 2, y: 0 }}
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
      <motion.img src={ladies1} alt="Ladies" className='w-full mt-4 object-cover' 
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 2 }}
      transition={{ duration: 0.8 }}/>

      {/* Services Section 1 */}
      <motion.section
      initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }} className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {/* Hair Styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hair Styling</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Hair Cut</li>
              <li>Ironing</li>
              <li>Global Colouring</li>
              <li>Blow Dry</li>
              <li>Root Touch Up</li>
              <li>Shampoo & Conditioning</li>
              <li>Head Massage</li>
              <li>Roller Setting</li>
              <li>Oiling</li>
            </ul>
          </motion.div>

          {/* Make Up */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Make Up</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Party Make Up</li>
              <li>Engagement Make Up</li>
              <li>Bridal & Reception Make Up</li>
              <li>Base Make Up</li>
              <li>Eye Make Up</li>
            </ul>
          </motion.div>

          {/* Hair Texture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hair Texture</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Rebonding</li>
              <li>Perming</li>
              <li>Keratin</li>
              <li>Colour Protection</li>
              <li>Smoothening</li>
            </ul>
          </motion.div>

          {/* Hair Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hair Treatments</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Spa Treatments</li>
              <li>Volumizing</li>
              <li>Keratin</li>
              <li>Advanced Hair Moisturising</li>
              <li>Scalp Treatments</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Second Image */}
      <motion.img src={ladies2} alt="Ladies" className='w-full object-cover' 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}/>

      {/* Services Section 2 */}
      <motion.section
      initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }} className="bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {/* Facials & Rituals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Facials & Rituals</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Bleach</li>
              <li>Luxury Facials / Rituals</li>
              <li>Clean Ups</li>
              <li>Body Polishing / Rejuvenation</li>
              <li>Threading</li>
            </ul>
          </motion.div>

          {/* Hand & Feet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Hand & Feet</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Manicure</li>
              <li>Spa Pedicure</li>
              <li>Pedicure</li>
              <li>Waxing</li>
              <li>Spa Manicure</li>
            </ul>
          </motion.div>

          {/* Nail Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration:0.9 }}
            viewport={{ once: true }}>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">Nail Care</h2>
            <ul className="list-disc marker:text-yellow-600 pl-5 font-semibold space-y-1 text-sm sm:text-lg md:text-lg">
              <li>Nail Paint</li>
              <li>Nail Art</li>
              <li>Nail Filling</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }} className='px-4 sm:px-6 md:px-10 mt-6 sm:mt-10'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Ladies Salon Services</h2>
        <p className='font-medium mt-3 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-justify'>
          Explore the art of looking your best beautiful with the best in the industry. LuxeCuts Salon makes a personal commitment to realize the prevalent gap in the industry by providing access to high-end ladies salon services, that too at convenient times and affordable prices - any day of the week and any time of the day! You can count on us for a hassle-free appointment.
          <br/><br/>
          LuxeCuts Salon is an Award-winning Salon Chain which has over 90 branches across India and Dubai. We are also one of the largest and fastest-growing Salon Chains in India. We have been at the forefront of setting new benchmarks and exceeding Industry standards.
          When you avail our services, we ensure that you are completely delighted with your style. Before our team of experienced, professional, and affable stylists works its magic, they’ll go through a thorough consultation to understand your preferences and style goals. We don’t start till we are clear of what you want.
          <br/><br/>
          At LuxeCuts Salon, our stylists have been rigorously trained to give you a unique and personalized experience. Our creative hair stylists and beauty experts work meticulously to give you a head-turning look. Be it a haircut focused on highlighting your best features or a hair color that would make you stand out and shine, we work wholeheartedly towards meeting your requirements and enhancing your look.
          <br/><br/>
          With a keen eye for detail, LuxeCuts Salon offers you varied options to provide proper care to your body, hair and skin. With our excellent range of Hair styling, Make Up, Hair Texture, Hair treatments, Facials, Hand and feet, Nail care services, we assure you the ‘Superfect’ dreamy look. Whether it’s overseeing client satisfaction for everyone who enters the salon or the magnificent interior that catches every onlooker’s fancy, LuxeCuts Salon possesses an infinite enthusiasm for keeping abreast with latest technologies and trends.
          <br/><br/>
          Visit us for all your beauty needs. You can also book an appointment by either filling the form on our website or by simply giving us a call. Book now for the best in class services!
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

export default Ladies;
