import React from "react";
import { Link } from "react-router-dom";
import hairImg from '../assets/salon.jpg';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpg';
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-fixed h-screen flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${hairImg})` }}
      >
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-black drop-shadow-xl">
          LOOK SHARP. FEEL SHARP.
        </motion.h1>
        <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }} 
        className="mb-6 text-md sm:text-lg md:text-xl lg:text-2xl text-white bg-black rounded-2xl p-2 font-semibold drop-shadow-md">
          Your trusted destination for<br />expert cuts, vibrant color, and luxurious treatments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/book-appoinment"
            className="bg-yellow-400 px-6 py-3 rounded font-semibold hover:text-black"
          >
            Book Now
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="p-8 sm:p-10 bg-gray-100">
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-widest text-purple-900 mb-8 sm:mb-10">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* GENTS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 2, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={pic1}
              alt="Gents"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 flex items-center justify-center">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
                GENTS
              </h2>
            </div>
          </motion.div>

          {/* LADIES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={pic2}
              alt="Ladies"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 flex items-center justify-center">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest">
                LADIES
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
      initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
             className="p-6 sm:p-8 md:p-10 mt-6 sm:mt-8">
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 text-center">
          Explore the Realm of Beauty
        </h2>
        <p className="mt-2 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-5xl mx-auto">
          With over 162 branches nationally and internationally, Looks salon is a premium beauty salon for men and women who desire to look the best every day. Getting a makeover not only changes the appearance of a person but also brings back the lost confidence and Looks Salon would take pride in being a part of it. From beauty to grooming services, we provide a tremendous range of facilities that touches every dimension of beauty and hair treatments. Our repertoire of professional experts makes sure that all your beauty and hair questions are answered, and you leave the salon with a big smile on your face.
          <br /><br />
          With over 6000 employees engaged in transforming your look, we make sure that all the services provided at our salons meet the international standards. Through our advice and solutions from the expertise in this array, we aim at giving the best services through our state-of-art facilities. Our professional stylists and beauty experts are constantly updated with the latest trends and fashion advices that help them to work efficiently and deliver outstanding results!
          <br /><br />
          Give us an opportunity to serve you once, we are sure you'll love to come back to us again and be our esteemed customer forever. Fill the form or call us to book an appointment now!
        </p>
      </motion.section>

      {/* Footer */}
      <motion.footer
      initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 2, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }} className="mt-10">
        <div className="bg-yellow-500 text-center p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">LuxeCuts Salon</h1>
          <p className="mt-4 font-semibold text-sm sm:text-base md:text-lg">
            The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks and absolute luxury.
          </p>

         <div className="flex justify-center items-center gap-4 mt-4">
            <FaFacebookF className="border-2 border-gray-500 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white w-10 h-10 p-2 transition" />
            <FaTwitter className="border-2 border-gray-500 rounded-full cursor-pointer hover:bg-sky-500 hover:text-white w-10 h-10 p-2 transition" />
            <FaInstagram className="border-2 border-gray-500 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white w-10 h-10 p-2 transition" />
          </div>
        </div>

        <p className="text-center mt-4 mb-6 text-sm sm:text-base">&copy; 2025, LuxeCuts Salon. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
};

export default Home;
