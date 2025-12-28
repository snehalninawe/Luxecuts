import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bgSalon from "../assets/bg-salon.jpg";
import { FaLock, FaUserShield } from "react-icons/fa";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@luxecuts.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      toast.success("Welcome Admin 👑");
      navigate("/admin");
    } else {
      toast.error("Invalid Admin Credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgSalon})` }}
    >


      {/* Login Card */}
      <div className="relative z-10 w-[380px] backdrop-blur-md bg-white/90 p-10 rounded-2xl shadow-2xl">
        
        {/* Logo / Title */}
        <h1 className="text-4xl font-extrabold text-center text-yellow-600 mb-2">
          LuxeCuts
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Admin Panel Access
        </p>

        {/* Email */}
        <div className="flex items-center border-b mb-6">
          <FaUserShield className="text-yellow-600 mr-3" />
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full py-2 outline-none bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex items-center border-b mb-8">
          <FaLock className="text-yellow-600 mr-3" />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 outline-none bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-yellow-600 text-white py-3 rounded-full font-semibold tracking-wide hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg"
        >
          Login as Admin
        </button>

        {/* Hint */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Authorized personnel only
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
