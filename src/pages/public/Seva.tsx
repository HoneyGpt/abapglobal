import React, { useEffect } from 'react';

const Seva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ paddingTop: '120px', minHeight: '80vh', background: 'var(--abap-bg-primary)' }}>
        <div className="section" style={{ paddingTop: '60px' }}>
          <h1 className="section-title serif-text" style={{ marginBottom: '20px' }}>Our Seva & Brotherhood</h1>
          <div style={{ width: '80px', height: '3px', background: 'var(--abap-saffron)', margin: '0 auto 60px' }}></div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--abap-text-secondary)' }}>
            <p style={{ marginBottom: '20px' }}>
              Ours is an organisation with people having over half a century exposure to Ardent Ayyappa cult, adorning the finest qualities of selfless and tireless efforts for this noble cause. Akhil Bhartiya AyyappaDharma PracharSabha which has its branches spread over all parts of South India, wishes to have people like you in its fold for the ideal propagation of Ayyappa Dharma.
            </p>
            <p style={{ marginBottom: '40px' }}>
              We involve ourselves in medical camps, supply of medicated water, financial assistance to the needy, free uniform to school children, educational scholarships, religious discourses, voluntary services at temples, and many other socio-religious activities. Therefore we seek your valuable patronage in fulfilling our basic duty to brotherhood.
            </p>
            
            <div className="grid-3" style={{ marginTop: '60px' }}>
              <div className="feature-card">
                <h3 className="feature-title serif-text">Medical Camps</h3>
                <p className="feature-desc">Providing emergency medical aid and medicated water to yatra pilgrims.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title serif-text">Education Support</h3>
                <p className="feature-desc">Providing free uniforms to school children and distributing educational scholarships.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title serif-text">Temple Preservation</h3>
                <p className="feature-desc">Active campaigns to "Save Our Temples" and providing voluntary services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seva;
