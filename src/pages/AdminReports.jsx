import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import toast, { Toaster } from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

function AdminReports() {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [dateRange, setDateRange] = useState({ from: '', to: '' });
    const [topServices, setTopServices] = useState([]);
    const [genderStats, setGenderStats] = useState([]);

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appoinments') || '[]');
        setAppointments(storedAppointments);
        setFilteredAppointments(storedAppointments);

        // Top services
        const serviceCount = {};
        storedAppointments.forEach(a => {
            if (a.service) serviceCount[a.service] = (serviceCount[a.service] || 0) + 1;
        });
        setTopServices(Object.entries(serviceCount).map(([name, count]) => ({ name, count })));

        // Gender stats
        const genderCount = {};
        storedAppointments.forEach(a => {
            if (a.gender) genderCount[a.gender] = (genderCount[a.gender] || 0) + 1;
        });
        setGenderStats(Object.entries(genderCount).map(([gender, value]) => ({ gender, value })));
    }, []);

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

    const handleFilter = () => {
        if (!dateRange.from || !dateRange.to) {
            toast.error('Please select both From and To dates');
            return;
        }
        const filtered = appointments.filter(a => a.date >= dateRange.from && a.date <= dateRange.to);
        setFilteredAppointments(filtered);
        toast.success('Filtered appointments');
    };

    return (
        <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
            <Toaster position="top-right" />
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Reports Dashboard</h1>

            {/* Filter & Export */}
            <div className="flex flex-wrap items-end gap-4 mb-8">
                <div className="flex flex-col">
                    <label className="font-semibold mb-1">From:</label>
                    <input
                        type="date"
                        value={dateRange.from}
                        onChange={e => setDateRange({ ...dateRange, from: e.target.value })}
                        className="border p-2 rounded shadow-sm focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold mb-1">To:</label>
                    <input
                        type="date"
                        value={dateRange.to}
                        onChange={e => setDateRange({ ...dateRange, to: e.target.value })}
                        className="border p-2 rounded shadow-sm focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <button
                    onClick={handleFilter}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded shadow-md transition-transform transform hover:scale-105"
                >
                    Filter
                </button>
                <CSVLink
                    data={filteredAppointments}
                    filename="appointments_report.csv"
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow-md transition-transform transform hover:scale-105"
                    onClick={() => toast.success('Exported report to CSV')}
                >
                    Export CSV
                </CSVLink>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Top Services */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Services</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={topServices} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" radius={[5,5,0,0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Gender Distribution */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Gender Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={genderStats}
                                dataKey="value"
                                nameKey="gender"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {genderStats.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Appointments Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Appointments List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                            <tr>
                                {['Name','Email','Service','Date','Time','Gender','City','State'].map((h,i) => (
                                    <th key={i} className="p-3 text-left border-b">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAppointments.map(a => (
                                <tr key={a.id} className="hover:bg-gray-50 transition-colors border-b text-sm">
                                    <td className="p-3">{a.name}</td>
                                    <td className="p-3">{a.email}</td>
                                    <td className="p-3">
                                        <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-semibold">
                                            {a.service}
                                        </span>
                                    </td>
                                    <td className="p-3">{a.date}</td>
                                    <td className="p-3">{a.time} {a.period}</td>
                                    <td className="p-3">
                                        <span className={`inline-block px-2 py-1 rounded-full font-semibold ${a.gender==='Male'?'bg-blue-200 text-blue-800':'bg-pink-200 text-pink-800'}`}>
                                            {a.gender}
                                        </span>
                                    </td>
                                    <td className="p-3">{a.city}</td>
                                    <td className="p-3">{a.state}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminReports;
