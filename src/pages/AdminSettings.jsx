import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function AdminSettings() {
  const [admin, setAdmin] = useState({
    name: '',
    email: '',
    password: '',
    theme: 'light',
    notifyEmail: false,
    notifySMS: false,
    profilePic: '',
    twoFactorAuth: false,
    defaultView: 'messages',
  });

  const [showPassword, setShowPassword] = useState(false);

  // Load admin settings from localStorage
  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem('adminSettings') || '{}');
    setAdmin({
      name: storedAdmin.name || 'Admin',
      email: storedAdmin.email || '',
      password: storedAdmin.password || '',
      theme: storedAdmin.theme || 'light',
      notifyEmail: storedAdmin.notifyEmail || false,
      notifySMS: storedAdmin.notifySMS || false,
      profilePic: storedAdmin.profilePic || '',
      twoFactorAuth: storedAdmin.twoFactorAuth || false,
      defaultView: storedAdmin.defaultView || 'messages',
    });
  }, []);

 const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  const updatedAdmin = { ...admin, [name]: type === 'checkbox' ? checked : value };
  setAdmin(updatedAdmin);

  if(name === 'name') {
    window.dispatchEvent(new Event('adminSettingsUpdated'));
  }
};


  const handleSave = (e) => {
  e.preventDefault();
  localStorage.setItem('adminSettings', JSON.stringify(admin));

  // Dispatch event
  window.dispatchEvent(new Event('adminSettingsUpdated'));

  toast.success('Settings saved successfully!');
};


  const handleReset = () => {
    const defaultSettings = {
      name: 'Admin',
      email: '',
      password: '',
      theme: 'light',
      notifyEmail: false,
      notifySMS: false,
      profilePic: '',
      twoFactorAuth: false,
      defaultView: 'messages',
    };
    localStorage.setItem('adminSettings', JSON.stringify(defaultSettings));
    setAdmin(defaultSettings);
    window.dispatchEvent(new Event('adminSettingsUpdated')); // Update nav
    toast.success('Admin settings reset to default!');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 min-h-screen">
      <Toaster />
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Admin Settings</h1>

      <form onSubmit={handleSave} className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={admin.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block font-semibold mb-2 text-gray-700">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={admin.password}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Notifications */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Notifications</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="notifyEmail" checked={admin.notifyEmail} onChange={handleChange} />
              Email Notifications
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="notifySMS" checked={admin.notifySMS} onChange={handleChange} />
              SMS Notifications
            </label>
          </div>
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Profile Picture URL</label>
          <input
            type="text"
            name="profilePic"
            value={admin.profilePic}
            onChange={handleChange}
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          {admin.profilePic && (
            <img src={admin.profilePic} alt="profile" className="mt-2 h-16 w-16 rounded-full object-cover" />
          )}
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center gap-3">
          <input type="checkbox" name="twoFactorAuth" checked={admin.twoFactorAuth} onChange={handleChange} />
          <label className="text-gray-700">Enable Two-Factor Authentication</label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-bold shadow-md transition-transform transform hover:scale-105"
          >
            Save Settings
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-md transition-transform transform hover:scale-105"
            onClick={handleReset}
          >
            Reset to Default
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminSettings;
