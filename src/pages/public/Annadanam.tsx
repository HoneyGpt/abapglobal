import React, { useEffect } from 'react';

const Annadanam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ paddingTop: '120px', minHeight: '80vh', background: 'var(--abap-bg-primary)' }}>
        <div className="section" style={{ paddingTop: '60px' }}>
          <h1 className="section-title serif-text" style={{ marginBottom: '20px' }}>Global Annadanam Camps</h1>
          <div style={{ width: '80px', height: '3px', background: 'var(--abap-saffron)', margin: '0 auto 60px' }}></div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--abap-text-secondary)' }}>
            <p style={{ marginBottom: '20px', textAlign: 'center' }}>
              We involve ourselves in massive Annadanam distributions at Sabarimala, Pamba, Erumeli, Azhutha, Kumily, and Laha Estate during all major temple festivals.
            </p>
            
            <div style={{ background: 'var(--abap-bg-secondary)', padding: '40px', borderRadius: '12px', marginTop: '40px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <h2 className="serif-text" style={{ color: 'var(--abap-text-primary)', marginBottom: '20px' }}>Active Camp Locations</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '15px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: 'var(--abap-text-primary)' }}>Phase-I Camps</span>
                  <span>Erumeli, Senkotta, Palani</span>
                </li>
                <li style={{ padding: '15px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: 'var(--abap-text-primary)' }}>Phase-II Camps</span>
                  <span>Palakkad, Azutha, Laha Estate</span>
                </li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button className="public-btn" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Sponsor a Meal Today</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Annadanam;
