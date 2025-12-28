import React, { useState } from 'react';
import bookAppoinment from '../assets/book-appoinment.jpg';
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


function BookAppoinment() {
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
      {/* HERO */}
      <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
        className="bg-cover bg-top md:bg-center md:bg-fixed h-60 sm:h-80 md:h-[550px] flex items-center justify-center"
        style={{ backgroundImage: `url(${bookAppoinment})` }}
      ></motion.section>

      {/* INFO */}
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10 text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">BOOK AN APPOINTMENT ONLINE</h2>
        <p className="text-red-500 font-semibold mt-4 text-base sm:text-lg">Our online booking service operates between 10:00 AM – 6:00 PM</p>
        <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">During opening hours, we’ll call you within 1 hour to confirm. Outside opening hours, we’ll contact you after 10:00 AM.</p>
        <p className="mt-4 font-semibold text-sm sm:text-base">Your data is safe with us. We only use it for booking purposes.</p>
      </motion.div>

      {/* FORM */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pb-16">
        <motion.form  initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }} className="bg-white shadow-lg rounded-lg p-6 sm:p-10" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            {/* LEFT */}
            <div className="flex-1 flex flex-col gap-4">
              <div className='flex gap-3 items-center'>
                <FaUser className='text-yellow-600 text-xl' />
                <input type="text" name='name' value={bookingForm.name} onChange={handleChange} placeholder="Name*" className="w-full border-b outline-none py-2" />
              </div>
              <div className='flex gap-3 items-center'>
                <IoMail className='text-yellow-600 text-2xl' />
                <input type="email" name='email' value={bookingForm.email} onChange={handleChange} placeholder="Email Id*" className="w-full border-b outline-none py-2" />
              </div>
              <div className='flex gap-3 items-center'>
                <IoMdCall className='text-yellow-600 text-2xl'/>
                <input type="tel" name='contact' value={bookingForm.contact} onChange={handleChange} placeholder="Contact*" className="w-full border-b outline-none py-2" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className='flex gap-3 items-center'>
                  <MdLocationPin className='text-yellow-600 text-2xl'/>
                  <input type="text" name='city' value={bookingForm.city} onChange={handleChange} placeholder="City*" className="w-full border-b outline-none py-2" />
                </div>
                <div className='flex gap-3 items-center'>
                  <MdLocationPin className='text-yellow-600 text-2xl'/>
                  <input type="text" name='state' value={bookingForm.state} onChange={handleChange} placeholder="State*" className="w-full border-b outline-none py-2" />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }} className="flex-1 flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <IoManSharp className="text-yellow-600 text-2xl" />
                <select name="gender" value={bookingForm.gender} onChange={handleChange} className="w-full border-b outline-none py-2 bg-transparent">
                  <option value="">Gender*</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className='flex gap-3 items-center'>
                <RxScissors className='text-yellow-600 text-2xl'/>
                <input type="text" name='service' value={bookingForm.service} onChange={handleChange} placeholder="Service Type" className="w-full border-b outline-none py-2"/>
              </div>
              <div className='flex gap-3 items-center'>
                <FaCalendarAlt className='text-yellow-600 text-2xl'/>
                <input type="date" name='date' value={bookingForm.date} onChange={handleChange} placeholder="Preferred Date*" className="w-full border-b outline-none py-2"/>
              </div>
              <div className="flex items-center gap-3">
                <LuClock className="text-yellow-600 text-xl" />
                <input type="text" name='time' value={bookingForm.time} onChange={handleChange} placeholder="Preferred Time*" className="w-full border-b outline-none py-2"/>
                <select className="border-b outline-none py-2" name='period' value={bookingForm.period} onChange={handleChange}>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded font-semibold transition" type='submit'>Book Appointment</button>
            <p className='mt-3'>OR</p>
            <p className="text-lg font-semibold mt-2">Call us @ <span className="text-yellow-500">1800 212 56657</span></p>
          </div>
        </motion.form>
      </div>

      {/* INFO TEXT */}
      <motion.div initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }} className='max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10'>
        <h2 className='text-2xl sm:text-3xl font-bold'>Book an Appointment at LuxeCuts Salon</h2>
        <p className='text-sm sm:text-base md:text-lg mt-3 font-semibold text-justify'>
          LuxeCuts Salon, a premium name in the salon industry leaves no stone unturned to bring out a new look for every man and woman. With more than 95 salons present in India and abroad, LuxeCuts Salon takes pride in becoming hair and beauty treatment partner of thousands of our esteemed customers for the longest time. Be it for a party, festival or a normal dating - Let us take care of your looks and you may remain tension-free!<br/><br/>
        Looking for a fresh look this festive season? Or want to bring out a new you? Then wait no more, just book an appointment at LuxeCuts Salon today and observe yourself getting transformed into a totally new person. Booking an appointment with LuxeCuts Salon is as easy as a cakewalk. All you've to do is to fill the quick form above through which our stylists and experts can have an understanding of your needs and then get a call from our executive to confirm your appointment, Viola! Your journey of getting transformed has begun.<br/><br/>
        So while we're working our best to give you a new look and answer all your beauty and hair questions, we want to make sure you have the best time and leave our salon with a big smile. Book your appointment now!
        </p>
      </motion.div>

      {/* Partner Brands */}
      <section className='flex flex-col justify-center items-center py-12 px-4 sm:px-6 md:px-10'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Our Partner Brands</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 border-t border-l border-dashed">
          {brands.map((logo, index) => (
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.3 }} key={index} className="h-60 w-full flex items-center justify-center border-b border-r border-dashed p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2">
              <img src={logo} alt="brand" className="max-h-36 sm:max-h-40 w-auto object-contain"/>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
      initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
           className='mt-10'>
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
      </motion.footer>
    </div>
  );
}

export default BookAppoinment;
