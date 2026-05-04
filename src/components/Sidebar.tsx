import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  HeartHandshake, 
  Wallet, 
  BookOpen, 
  PackageSearch, 
  FileImage, 
  Settings,
  Bell
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="header" style={{ justifyContent: 'flex-start', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'var(--gradient-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          S
        </div>
        <h2 className="text-gradient" style={{ fontSize: '1.25rem', margin: 0 }}>Spazehive</h2>
      </div>

      <div style={{ overflowY: 'auto', flex: 1, padding: '20px 0' }}>
        <div className="nav-section-title">Main</div>
        <NavLink to="/admin" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/communications" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Bell size={20} />
          <span>Communications</span>
        </NavLink>

        <div className="nav-section-title">Finance</div>
        <NavLink to="/admin/donations" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <HeartHandshake size={20} />
          <span>Donations</span>
        </NavLink>
        <NavLink to="/admin/finance" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Wallet size={20} />
          <span>Income & Expense</span>
        </NavLink>
        <NavLink to="/admin/accounts" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <BookOpen size={20} />
          <span>Cashbook & Accounts</span>
        </NavLink>

        <div className="nav-section-title">Operations (Trust)</div>
        <NavLink to="/admin/inventory" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <PackageSearch size={20} />
          <span>Inventory Management</span>
        </NavLink>
        <NavLink to="/admin/documents" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FileImage size={20} />
          <span>Documents & Assets</span>
        </NavLink>

        <div className="nav-section-title">System</div>
        <NavLink to="/admin/access" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={20} />
          <span>Access Control</span>
        </NavLink>
        <NavLink to="/admin/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </div>

      <div style={{ padding: '20px', borderTop: '1px solid var(--border-color)' }}>
        <div className="flex items-center gap-4">
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--sidebar-active)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            fontWeight: '600'
          }}>
            AD
          </div>
          <div>
            <div className="font-semibold text-sm">Admin User</div>
            <div className="text-sm text-muted">National Level</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
