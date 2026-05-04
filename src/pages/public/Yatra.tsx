import React, { useEffect } from 'react';

const Yatra = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ paddingTop: '120px', minHeight: '80vh', background: 'var(--abap-bg-primary)' }}>
        <div className="section" style={{ paddingTop: '60px' }}>
          <h1 className="section-title serif-text" style={{ marginBottom: '20px' }}>Sabari Yatra & Traditions</h1>
          <div style={{ width: '80px', height: '3px', background: 'var(--abap-saffron)', margin: '0 auto 60px' }}></div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--abap-text-secondary)' }}>
            <p style={{ marginBottom: '20px' }}>
              'Ayyappa Dharma' , the ultimate Solace for all in this world, plays a vital part in propagation of peace through divinity. Ayyappa cult is the unique divine propagation irrespective of caste, creed or religion. It spreads brotherhood with a sense of pride, for a new world devoid of animosity.
            </p>
            <p style={{ marginBottom: '40px' }}>
              Guiding devotees on the 41 days Deeksha, Irumudikettu, and Sabari Yatra. Preserving and teaching the sacred rituals of Lord Ayyappa.
            </p>
            
            <div className="grid-3" style={{ marginTop: '60px' }}>
              <div className="feature-card">
                <h3 className="feature-title serif-text">41 Days Deeksha</h3>
                <p className="feature-desc">The rigorous Vratham preparing the mind and body for the holy trek.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title serif-text">Irumudikettu</h3>
                <p className="feature-desc">The sacred twin-pocketed bundle containing the offerings for Lord Ayyappa.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title serif-text">Rituals</h3>
                <p className="feature-desc">Detailed guidance on Padi Pooja, Udayasthamana Pooja, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yatra;
