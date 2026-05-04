import React, { useEffect, useState } from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [isDark]);

  return (
    <header className="header">
      <div className="flex items-center gap-4" style={{ width: '400px' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search across Spazehive..." 
            className="form-control"
            style={{ paddingLeft: '40px', borderRadius: '20px', background: 'var(--bg-primary)' }}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="btn-outline" style={{ border: 'none', padding: '8px', borderRadius: '50%' }} onClick={() => setIsDark(!isDark)}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} className="text-muted" />
          <span style={{ 
            position: 'absolute', 
            top: '-4px', 
            right: '-4px', 
            width: '8px', 
            height: '8px', 
            background: 'var(--danger)', 
            borderRadius: '50%' 
          }}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
