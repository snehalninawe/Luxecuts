import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ladies from './pages/Ladies';
import Gents from './pages/Gents';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { Toaster } from 'react-hot-toast';
import BookAppoinment from './pages/BookAppoinment';
import Offers from './pages/Offers';
import AdminDashboard from './pages/AdminDashboard';

import AdminSettings from './pages/AdminSettings';
import AdminLayout from './components/AdminLayout';
import AdminReports from './pages/AdminReports';
import AdminMessages from './pages/AdminMessages';
import AdminLogin from './components/AdminLogin';
import AdminProtectedRoute from './components/AdminProtectedRoute';

function App() {
  const currentPath = window.location.pathname;

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      {!currentPath.startsWith('/admin') && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services/ladies' element={<Ladies />} />
        <Route path='/services/gents' element={<Gents />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book-appoinment' element={<BookAppoinment />} />
        <Route path='/offers' element={<Offers />} />

        {/* Admin Routes */}
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={
            <AdminProtectedRoute>
            <AdminDashboard />
            </AdminProtectedRoute>} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
