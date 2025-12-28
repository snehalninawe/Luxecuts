import React, { useState } from 'react';
import bgImg from '../assets/contact.jpg';
import { MdFeedback } from "react-icons/md";
import { FaCommentDots, FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaRegClock, FaTwitter, FaUser } from "react-icons/fa6";
import crew from '../assets/american-crew.webp';
import dyson from '../assets/dyson.webp';
import loreal from '../assets/Loreal.webp';
import kerastase from '../assets/Kerastase.webp';
import brasil from '../assets/main-brasil-cacau.webp';
import olaplex from '../assets/olaplex.webp';
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import toast from 'react-hot-toast';
import { motion } from "framer-motion";


function Contact() {
    const [formData, setFormData] = useState({ name:'', email:'', contact:'', message:'' });

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    

    const handleSubmit = () => {
    if(!formData.name || !formData.email || !formData.contact || !formData.message){
        toast.error("Please Fill All Fields");
        return;
    }

    const newMessage = {
        ...formData,
        id: Date.now(), // unique id
        date: new Date().toLocaleString() // timestamp for admin
    };

    const existingmsg = JSON.parse(localStorage.getItem('contactMsg')) || [];
    localStorage.setItem('contactMsg', JSON.stringify([...existingmsg, newMessage]));

    toast.success("Message sent successfully");
    setFormData({ name:'', email:'', contact:'', message:'' });
}

    const brands = [loreal, kerastase, olaplex, crew, dyson, brasil];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 0.9 }} className="w-full">
            {/* Hero Image */}
            <section className="bg-cover bg-top md:bg-center md:bg-fixed h-60 sm:h-80 md:h-[550px] flex items-center justify-center" style={{ backgroundImage: `url(${bgImg})` }} 
            initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 2, scale: 2 }}
                transition={{ duration: 0.8 }}>
                
                
                <div className="relative z-10 text-center bg-yellow-200/85 p-3 sm:p-5 md:p-7 rounded-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  uppercase">
                Feel free to contact us..!
                </div>
                </section>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
                <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">CONTACT US</motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-52">
                    {/* Left - Salon Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 2, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }} className="space-y-6">
                        <h3 className="text-2xl font-bold">SALON ADDRESS</h3>
                        <hr />
                        <div className="space-y-4 text-base sm:text-lg">
                            <div className="flex gap-3 items-start">
                                <FaLocationDot className="text-yellow-500 mt-2"/>
                                <p>No 20A / 40, Omkar Nagar Road,<br/>Reshim bagh, Nagpur - 440027</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaPhone className="text-yellow-500"/>
                                <p>1800 212 56657</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaRegClock className="text-yellow-500"/>
                                <p>Open until 09:00 PM</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <MdFeedback className="text-yellow-500 mt-1"/>
                                <p><strong>Feedback:</strong> customercare@luxecuts.in</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold mb-2">Follow us</p>
                            <div className="flex gap-3">
                                <FaFacebookF className="w-10 h-10 p-2 bg-blue-600 text-white cursor-pointer hover:bg-blue-500 transition"/>
                                <FaTwitter className="w-10 h-10 p-2 bg-sky-500 text-white cursor-pointer hover:bg-sky-400 transition"/>
                                <FaInstagram className="w-10 h-10 p-2 bg-pink-500 text-white cursor-pointer hover:bg-pink-400 transition"/>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 2, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }} className="space-y-6">
                        <h3 className="text-2xl font-bold">SEND QUERY</h3>
                        <hr />
                        <p className="text-base sm:text-lg mb-3">Kindly fill up your details and submit your query</p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 2, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }} className="space-y-4">
                            <div className='flex gap-3 items-center'>
                                <FaUser className='text-yellow-600 text-lg'/>
                                <input type="text" name='name' placeholder="Name*" value={formData.name} onChange={handleChange} className="w-full border-b outline-none py-2" />
                            </div>
                            <div className='flex gap-3 items-center'>
                                <IoMail className='text-yellow-600 text-xl'/>
                                <input type="email" name='email' placeholder="Email Id*" value={formData.email} onChange={handleChange} className="w-full border-b outline-none py-2" />
                            </div>
                            <div className='flex gap-3 items-center'>
                                <IoMdCall className='text-yellow-600 text-xl'/>
                                <input type="number" name='contact' placeholder="Contact*" value={formData.contact} onChange={handleChange} className="w-full border-b outline-none py-2" />
                            </div>
                            <div className='flex gap-3 items-start'>
                                <FaCommentDots className='text-yellow-600 mt-2 text-xl'/>
                                <textarea name='message' placeholder="Query*" value={formData.message} onChange={handleChange} className="w-full border-b outline-none py-2 resize-none" rows={4}></textarea>
                            </div>
                        </motion.div>

                        <div className="flex flex-col items-center mt-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }} 
                                className="bg-yellow-600 text-white px-6 py-3 hover:bg-yellow-500 transition" onClick={handleSubmit}>Send Query</motion.button>
                            <p className="mt-3">OR</p>
                            <p className="text-lg font-semibold mt-1">Call us @ <span className="text-yellow-500">1800 212 56657</span></p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* About Section */}
            <motion.div
            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 2, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                             className='px-4 sm:px-6 md:px-10 mt-10'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>LuxeCuts Salon – Largest Salon Chain in India</h1>
                <p className='font-medium mt-4 text-sm sm:text-sm md:text-lg leading-relaxed text-justify'>
                    LuxeCuts Salon is an award-winning, elite unisex salon with over 95 branches across India and internationally. Our stylists are trained to provide premium services using the latest techniques. We ensure your experience is comfortable, professional, and world-class.
                     Our salons are easily accessible and located in the most happening places of the cities.<br/> <br/> Moreover, the services we provide are handled by award winning stylists.

Our stylists are always updated with the latest trends and techniques to give you the best services with utmost comfort. If you’re looking for any sort of beauty and hair services and not quite sure of your requirement, our experts can really give you some awesome recommendations and make sure that you get premium services at our salon.
                </p>
            </motion.div>

            {/* Partner Brands */}
            <section className='flex flex-col justify-center items-center py-12 px-4 sm:px-6 md:px-10'>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Our Partner Brands</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 border-t border-l border-dashed">
                    {brands.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }} 
                            className="h-60 w-full flex items-center justify-center border-b border-r border-dashed p-4 sm:p-6 transition-transform duration-300 hover:-translate-y-2">
                            <img src={logo} alt="brand" className="max-h-36 sm:max-h-40 w-auto object-contain"/>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <motion.footer
            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 2, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
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
                <p className="text-center mt-4 mb-6 text-sm sm:text-base">&copy; 2025, LuxeCuts Salon. All rights reserved.</p>
            </motion.footer>
        </motion.div>
    );
}

export default Contact;


