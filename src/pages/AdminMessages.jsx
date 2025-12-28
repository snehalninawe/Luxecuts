import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaTrash, FaSearch } from 'react-icons/fa';

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState('');

  const loadMessages = () => {
    const stored = JSON.parse(localStorage.getItem('contactMsg') || '[]');

    // Assign id and date if missing
    const updated = stored.map((m) => ({
      id: m.id || Date.now() + Math.random(), // unique id if missing
      date: m.date || new Date().toLocaleString(),// current date if missing
      message: m.message || m.msg || '',  
      ...m
    }));

    setMessages(updated.reverse()); // latest first
    localStorage.setItem('contactMsg', JSON.stringify(updated)); // save back updated messages
  };

  useEffect(() => {
    loadMessages();

    const handleStorageChange = (e) => {
      if (e.key === 'contactMsg') {
        loadMessages();
        toast.success('New message received!');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const deleteMessage = (id) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem('contactMsg', JSON.stringify(updated));
    toast.success('Message deleted successfully!');
  };

  const filteredMessages = messages.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.email.toLowerCase().includes(search.toLowerCase()) ||
    m.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Toaster />
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">User Queries</h1>

      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-3 pl-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
      </div>

      <div className="overflow-x-auto max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-4">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3 border-b text-left">Name</th>
              <th className="p-3 border-b text-left">Email</th>
              <th className="p-3 border-b text-left">Message</th>
              <th className="p-3 border-b text-left">Date</th>
              <th className="p-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMessages.length > 0 ? filteredMessages.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50 transition-colors border-b">
                <td className="p-3">{m.name}</td>
                <td className="p-3">{m.email}</td>
                <td className="p-3 max-w-xs break-words">{m.message}</td>
                <td className="p-3">{m.date}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => deleteMessage(m.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">No messages found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminMessages;
