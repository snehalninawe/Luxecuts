import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';

function AdminNav() {
  const [adminName, setAdminName] = useState('Admin');

  const updateName = () => {
    const stored = JSON.parse(localStorage.getItem('adminSettings') || '{}');
    setAdminName(stored.name || 'Admin');
  };

  useEffect(() => {
    // Initial load
    updateName();

    // Listen for custom event
    const handleEvent = () => updateName();
    window.addEventListener('adminSettingsUpdated', handleEvent);

    // Listen for storage changes in other tabs
    const handleStorage = (e) => {
      if (e.key === 'adminSettings') {
        updateName();
      }
    };
    window.addEventListener('storage', handleStorage);

    // Cleanup
    return () => {
      window.removeEventListener('adminSettingsUpdated', handleEvent);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return (
    <nav className="bg-purple-600 text-white flex justify-end items-center p-6">
      <FaUserCircle className="text-3xl mr-2" />
      <span className="font-semibold text-lg mr-2">{adminName}</span>
      <FaChevronDown />
    </nav>
  );
}

export default AdminNav;
