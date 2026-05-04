import React from 'react';
import { 
  Map, 
  Moon, 
  BookOpen, 
  QrCode, 
  HeartHandshake, 
  Bell, 
  Calendar, 
  Ticket, 
  Stethoscope, 
  Home 
} from 'lucide-react';
import './MemberDashboard.css';

const MemberDashboard = () => {
  return (
    <div className="bento-dashboard">
      <header className="bento-header">
        <h1>ABAP <span className="gold-text">Sanctuary</span></h1>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Welcome back,</div>
            <div style={{ fontWeight: 600 }}>Rajesh K.</div>
          </div>
          <div style={{ 
            width: '40px', height: '40px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#000', fontWeight: 'bold'
          }}>
            RK
          </div>
        </div>
      </header>

      <div className="bento-grid">
        {/* Box 1: Yatra Companion */}
        <div className="bento-box box-yatra">
          {/* Subtle temple outline SVGs (using a simple path as placeholder for the geometry) */}
          <svg className="temple-outline" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 10 L90 50 L90 90 L10 90 L10 50 Z" />
            <path d="M40 90 L40 60 L60 60 L60 90" />
            <path d="M50 10 L50 0" />
          </svg>
          
          <div className="yatra-content">
            <h2 className="bento-title">The Yatra Companion</h2>
            <p className="text-sm" style={{ maxWidth: '60%', lineHeight: 1.6 }}>
              Your sacred journey to Sabarimala starts here. Track your Deeksha, explore the holy route, and immerse yourself in the divine rituals.
            </p>
            <div className="yatra-actions mt-auto">
              <button className="btn-gold">
                <Map size={18} /> Route Map
              </button>
              <button className="btn-gold-outline">
                <Moon size={18} /> 41-Day Tracker
              </button>
              <button className="btn-gold-outline">
                <BookOpen size={18} /> Rituals Guide
              </button>
            </div>
          </div>
        </div>

        {/* Box 2: Digital Identity */}
        <div className="bento-box box-identity" style={{ alignItems: 'center', textAlign: 'center' }}>
          <h2 className="bento-title" style={{ justifyContent: 'center', width: '100%' }}>Swamiye Saranam Ayyappa</h2>
          <div className="qr-container">
            <QrCode size={120} color="#050b14" />
          </div>
          <div className="identity-status gold-text">Subscribed Member</div>
          <button className="btn-gold" style={{ width: '100%' }}>
            Renew Subscription
          </button>
        </div>

        {/* Box 3: Live Seva & Annadanam */}
        <div className="bento-box box-seva">
          <h2 className="bento-title"><HeartHandshake size={24} color="#FFD700" /> Live Seva & Annadanam Impact</h2>
          <div className="seva-grid">
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '24px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }} className="gold-text">12,450</div>
              <div className="text-sm" style={{ marginTop: '8px' }}>Meals Sponsored Today</div>
              <button className="btn-gold" style={{ marginTop: '16px', width: '100%' }}>Donate Now</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '12px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className="text-sm">
                  <span>Erumeli Camp</span>
                  <span className="gold-text">85%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className="text-sm">
                  <span>Pamba Base</span>
                  <span className="gold-text">60%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} className="text-sm">
                  <span>Azhutha</span>
                  <span className="gold-text">45%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 4: Trust Updates */}
        <div className="bento-box box-updates">
          <h2 className="bento-title"><Bell size={20} color="#FFD700" /> Official Updates</h2>
          <div className="updates-feed">
            <div className="update-item">
              <div className="update-meta">National Council • Today</div>
              <div style={{ fontWeight: 500, marginBottom: '4px' }}>Phase-II Annadanam Camp Preparations</div>
              <div className="text-sm">Volunteers requested for the upcoming camps in Palakkad and Laha estate...</div>
            </div>
            <div className="update-item">
              <div className="update-meta">Kerala State • Yesterday</div>
              <div style={{ fontWeight: 500, marginBottom: '4px' }}>Medical Camp Setup Complete</div>
              <div className="text-sm">The emergency medical aid station at Pamba is now fully operational.</div>
            </div>
            <div className="update-item">
              <div className="update-meta">Trust Board • Oct 15</div>
              <div style={{ fontWeight: 500, marginBottom: '4px' }}>Monthly Meeting Minutes Available</div>
              <div className="text-sm">Documents have been uploaded to the portal for all subscribed members.</div>
            </div>
          </div>
        </div>

        {/* Box 5: Quick Links */}
        <div className="bento-box box-links">
          <h2 className="bento-title">Quick Links</h2>
          <div className="links-grid mt-auto">
            <a href="#" className="link-card">
              <Ticket size={28} color="#FFD700" />
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Virtual Q Booking</span>
            </a>
            <a href="#" className="link-card">
              <Stethoscope size={28} color="#FFD700" />
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Medical Camps</span>
            </a>
            <a href="#" className="link-card" style={{ gridColumn: 'span 2' }}>
              <Home size={28} color="#FFD700" />
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Accommodation Directory</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MemberDashboard;
