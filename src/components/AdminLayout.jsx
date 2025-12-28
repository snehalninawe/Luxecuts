
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaChartBar, FaListAlt, FaList, FaCog, FaUserCircle } from 'react-icons/fa';

function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col p-4">
        <div className="flex items-center gap-2 justify-center mb-6">
          <FaUserCircle className="text-3xl" />
          <h2 className="text-2xl font-bold">Admin</h2>
        </div>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaChartBar /> Dashboard
          </NavLink>
          <NavLink
            to="/admin/reports"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaListAlt /> Reports
          </NavLink>
          <NavLink
            to="/admin/messages"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaList /> Messages
          </NavLink>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaCog /> Settings
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-gray-800 text-white flex justify-end items-center p-4 shadow-md">
          <span className="mr-4 font-semibold">Admin Name</span>
          <FaUserCircle className="text-2xl" />
        </div>

        {/* Render child pages */}
        <div className="flex-1 overflow-auto p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
