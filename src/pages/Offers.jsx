import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa';
import { IoMail, IoManSharp } from 'react-icons/io5';
import { IoMdCall } from 'react-icons/io';
import { MdLocationPin } from "react-icons/md";
import { RxScissors } from "react-icons/rx";
import { FaCalendarAlt } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import crew from '../assets/american-crew.webp';
import dyson from '../assets/dyson.webp';
import loreal from '../assets/Loreal.webp';
import kerastase from '../assets/Kerastase.webp';
import brasil from '../assets/main-brasil-cacau.webp';
import olaplex from '../assets/olaplex.webp';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";


function Offers() {
  const brands = [loreal, kerastase, olaplex, crew, dyson, brasil];

  const [bookingForm, setBookingForm] = useState({
    name:'', email:'', contact:'', city:'', state:'', gender:'', service:'', date:'', time:'', period:'AM'
  });

  const handleChange = (e) => setBookingForm({...bookingForm, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in bookingForm) {
      if(!bookingForm[key]){
        toast.error("Please Fill All Fields");
        return;
      }
    }
    const appoinments = JSON.parse(localStorage.getItem("appoinments")) || [];
    localStorage.setItem("appoinments", JSON.stringify([...appoinments, {...bookingForm, id:Date.now()}]));
    toast.success("Appointment booked successfully! We will call you soon.");
    setBookingForm({
      name:'', email:'', contact:'', city:'', state:'', gender:'', service:'', date:'', time:'', period:'AM'
    });
  }

  return (
    <div className="w-full overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }} 
        className='font-bold text-xl sm:text-3xl md:text-4xl text-center text-white w-full p-3 bg-cyan-700 mt-1'>Offers</motion.h1>

      {/* INFO */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pb-16 bg-gray-200 mt-8 rounded-md">
        <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }} 
        className="text-center py-10">
          <h2 className="text-xl sm:text-3xl font-bold">Let's not wait for the "Perfect Look"</h2>
          <p className='mt-5 font-semibold'>Book An Appointment Now!</p>
        </motion.div>

        {/* FORM */}
        <motion.form initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}  className="bg-white shadow-lg rounded-lg p-6 sm:p-10" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            {/* LEFT */}
            <div className="flex-1 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className='flex gap-3 items-center'>
                <FaUser className='text-yellow-600 text-xl' />
                <input type="text" name='name' value={bookingForm.name} onChange={handleChange} placeholder="Name*" className="w-full border-b outline-none py-2" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className='flex gap-3 items-center'>
                <IoMail className='text-yellow-600 text-2xl' />
                <input type="email" name='email' value={bookingForm.email} onChange={handleChange} placeholder="Email Id*" className="w-full border-b outline-none py-2" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className='flex gap-3 items-center'>
                <IoMdCall className='text-yellow-600 text-2xl'/>
                <input type="tel" name='contact' value={bookingForm.contact} onChange={handleChange} placeholder="Contact*" className="w-full border-b outline-none py-2" />
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className='flex gap-3 items-center'>
                  <MdLocationPin className='text-yellow-600 text-2xl'/>
                  <input type="text" name='city' value={bookingForm.city} onChange={handleChange} placeholder="City*" className="w-full border-b outline-none py-2" />
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className='flex gap-3 items-center'>
                  <MdLocationPin className='text-yellow-600 text-2xl'/>
                  <input type="text" name='state' value={bookingForm.state} onChange={handleChange} placeholder="State*" className="w-full border-b outline-none py-2" />
                </motion.div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className="flex gap-3 items-center">
                <IoManSharp className="text-yellow-600 text-2xl" />
                <select name="gender" value={bookingForm.gender} onChange={handleChange} className="w-full border-b outline-none py-2 bg-transparent">
                  <option value="">Gender*</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className='flex gap-3 items-center'>
                <RxScissors className='text-yellow-600 text-2xl'/>
                <input type="text" name='service' value={bookingForm.service} onChange={handleChange} placeholder="Service Type" className="w-full border-b outline-none py-2"/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className='flex gap-3 items-center'>
                <FaCalendarAlt className='text-yellow-600 text-2xl'/>
                <input type="date" name='date' value={bookingForm.date} onChange={handleChange} placeholder="Preferred Date*" className="w-full border-b outline-none py-2"/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }} className="flex items-center gap-3">
                <LuClock className="text-yellow-600 text-xl" />
                <input type="text" name='time' value={bookingForm.time} onChange={handleChange} placeholder="Preferred Time*" className="w-full border-b outline-none py-2"/>
                <select className="border-b outline-none py-2" name='period' value={bookingForm.period} onChange={handleChange}>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded font-semibold transition" type='submit'>
              Book Appointment
            </motion.button>
            <p className='mt-3'>OR</p>
            <p className="text-lg font-semibold mt-2">Call us @ <span className="text-yellow-500">1800 212 56657</span></p>
          </div>
        </motion.form>
      </motion.div>

      {/* OFFERS INFO */}
      <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay:0.15 }} className='max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10'>
        <h2 className='text-sm sm:text-3xl font-bold'>LuxeCuts Salon Discounts & Offers</h2>
        <p className='text-sm sm:text-base md:text-lg font-semibold mt-3 text-justify'>
          LuxeCuts Salon, being a premium beauty salon for both women and men, makes sure that every customer has a delighted experience every time he/she visits any of our 95+ branches - moreover, the story of a transformation and looking exquisite varies from person to person and we get to hear many interesting and positive stories from our esteemed customers every day and that’s what keeps us going!<br/><br/>
                 For their brand loyalty and also to make our esteemed customers feel privileged and satisfied, we regularly present them with discounts and offers. LuxeCuts Salon always strives hard to have a long lasting relationships with its customers and thus we come up with amazing offers which can availed by our customers even if they are visiting us for the first time.<br/><br/>
                     Keep watching this section to check out the latest discounts and offers. We also have exclusive offers for our loyal customers - get in touch with us to know more.</p>
      </motion.div>

      {/* Partner Brands */}
      <section className='flex flex-col justify-center items-center py-16 px-4 sm:px-6 md:px-10'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Our Partner Brands</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 border-t border-l border-dashed">
          {brands.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.3 }}
              className="h-60 w-full flex items-center justify-center border-b border-r border-dashed p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2">
              <img src={logo} alt="brand" className="max-h-36 sm:max-h-40 w-auto object-contain"/>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer 
      initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay:  0.5 }} className='mt-10'>
        <div className="bg-yellow-500 text-center p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">LuxeCuts Salon</h1>
          <p className="mt-4 font-medium text-sm sm:text-base md:text-lg">The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks and absolute luxury.</p>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaFacebookF className="w-10 h-10 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"/>
            <FaTwitter className="w-10 h-10 p-2 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition"/>
            <FaInstagram className="w-10 h-10 p-2 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition"/>
          </div>
        </div>
        <p className="text-center mt-4 mb-6 text-sm sm:text-base">&copy;2025, LuxeCuts Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Offers;
