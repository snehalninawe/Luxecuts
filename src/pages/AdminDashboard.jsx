import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [services, setServices] = useState([]);

  const updateDashboard = () => {
    const storedAppointments = JSON.parse(localStorage.getItem('appoinments') || '[]');
    setAppointments(storedAppointments);

    const today = new Date().toISOString().split('T')[0];
    setTodaysAppointments(storedAppointments.filter(a => a.date === today));

    const serviceCount = {};
    storedAppointments.forEach(a => {
      if (a.service) serviceCount[a.service] = (serviceCount[a.service] || 0) + 1;
    });
    const topServices = Object.entries(serviceCount).map(([name, count]) => ({ name, count }));
    setServices(topServices);
  };

  useEffect(() => updateDashboard(), []);
  useEffect(() => {
    const handleStorageChange = () => updateDashboard();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const deleteAppointment = (id) => {
    const updated = appointments.filter(a => a.id !== id);
    localStorage.setItem('appoinments', JSON.stringify(updated));
    updateDashboard();
    toast.success('Appointment deleted');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Toaster position="top-right" />
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
          <p className="text-lg font-semibold text-gray-700">Today's Appointments</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{todaysAppointments.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-200 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
          <p className="text-lg font-semibold text-gray-700">Total Appointments</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{appointments.length}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-200 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
          <p className="text-lg font-semibold text-gray-700">Top Services Count</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{services.reduce((acc, s) => acc + s.count, 0)}</p>
        </div>
      </div>

      {/* Top Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Services</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Bookings</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-medium">{s.name}</td>
                  <td className="p-3">
                    <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-semibold">
                      {s.count}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Today's Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todaysAppointments.map(a => (
                <tr key={a.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-3">{a.time} {a.period}</td>
                  <td className="p-3">{a.name}</td>
                  <td className="p-3">
                    <span className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full font-semibold">
                      {a.service}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteAppointment(a.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
