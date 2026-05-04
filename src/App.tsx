import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Donations from './pages/Donations';
import Finance from './pages/Finance';
import Communications from './pages/Communications';
import Landing from './pages/public/Landing';
import Yatra from './pages/public/Yatra';
import Seva from './pages/public/Seva';
import Annadanam from './pages/public/Annadanam';
import MemberDashboard from './pages/MemberDashboard';
import Navbar from './components/public/Navbar';
import Footer from './components/public/Footer';
import './index.css';

// Admin Layout wrapper
const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="app-container">
    <Sidebar />
    <main className="main-content">
      <Header />
      <div className="page-content">
        {children}
      </div>
    </main>
  </div>
);

// Public Layout wrapper to persist Navbar (and Google Translate)
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="public-body">
    <Navbar />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={
          <PublicLayout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="yatra" element={<Yatra />} />
              <Route path="seva" element={<Seva />} />
              <Route path="annadanam" element={<Annadanam />} />
            </Routes>
          </PublicLayout>
        } />
        
        {/* Member Route */}
        <Route path="/dashboard" element={<MemberDashboard />} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="donations" element={<Donations />} />
              <Route path="finance" element={<Finance />} />
              <Route path="communications" element={<Communications />} />
              <Route path="*" element={
                <div className="flex items-center justify-center" style={{ height: '100%' }}>
                  <div className="card text-center" style={{ maxWidth: '400px' }}>
                    <h2 className="mb-4">Coming Soon</h2>
                    <p className="text-muted">This module is currently under development as per project timeline.</p>
                  </div>
                </div>
              } />
            </Routes>
          </AdminLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
