import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ paddingTop: '120px', minHeight: '90vh', background: 'var(--abap-bg-primary)' }}>
        <div className="section" style={{ paddingTop: '60px' }}>
          <h1 className="section-title serif-text" style={{ marginBottom: '20px' }}>About Us</h1>
          <div style={{ width: '80px', height: '3px', background: 'var(--abap-saffron)', margin: '0 auto 60px' }}></div>
          
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Leadership Profile Section */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              gap: '60px', 
              alignItems: 'center', 
              marginBottom: '80px',
              flexWrap: 'wrap'
            }}>
              {/* President Image Frame */}
              <div style={{ 
                flex: '1 1 350px', 
                display: 'flex', 
                justifyContent: 'center',
                perspective: '1000px'
              }}>
                <div style={{ 
                  position: 'relative',
                  width: '320px',
                  borderRadius: '16px',
                  padding: '12px',
                  background: 'var(--abap-bg-secondary)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 20px 40px rgba(212, 175, 55, 0.12)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }} className="president-card-hover">
                  <div style={{ 
                    position: 'absolute', 
                    top: '-10px', 
                    left: '-10px', 
                    right: '-10px', 
                    bottom: '-10px', 
                    border: '1px dashed var(--abap-saffron)', 
                    borderRadius: '20px',
                    pointerEvents: 'none',
                    opacity: 0.6
                  }}></div>
                  <img 
                    src="/president.png" 
                    alt="Sri. K. Ayyappa Dass Ji" 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '10px',
                      display: 'block',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ 
                    marginTop: '20px', 
                    textAlign: 'center', 
                    paddingBottom: '10px' 
                  }}>
                    <h3 className="serif-text" style={{ 
                      color: 'var(--abap-text-primary)', 
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      marginBottom: '6px'
                    }}>Sri. K. Ayyappa Dass Ji</h3>
                    <p style={{ 
                      color: 'var(--abap-gold)', 
                      fontWeight: 600, 
                      fontSize: '0.95rem',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}>National President</p>
                    <p style={{ 
                      color: 'var(--abap-text-secondary)', 
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '1px'
                    }}>ABAP</p>
                  </div>
                </div>
              </div>

              {/* President Message / Introduction */}
              <div style={{ flex: '1 1 500px' }}>
                <h2 className="serif-text" style={{ 
                  color: 'var(--abap-text-primary)', 
                  fontSize: '2.2rem', 
                  marginBottom: '24px',
                  position: 'relative'
                }}>
                  National Leadership Message
                </h2>
                <div style={{ width: '40px', height: '2px', background: 'var(--abap-saffron)', marginBottom: '30px' }}></div>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.8, 
                  color: 'var(--abap-text-secondary)',
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  "Ayyappa Dharma is not merely a path of devotion, but a profound way of life centered on peace, purity, and universal brotherhood. It transcends all boundaries of caste, creed, and status, uniting humanity in selflessness and service."
                </p>
                <p style={{ 
                  fontSize: '1.05rem', 
                  lineHeight: 1.8, 
                  color: 'var(--abap-text-secondary)',
                  marginBottom: '30px'
                }}>
                  Under the spiritual guidance and leadership of our National President, <strong>Sri. K. Ayyappa Dass Ji</strong>, the Akhila Bharatheeya Ayyappa Dharma Prachara Sabha (ABAP) continues its sacred mission across India. Through massive Annadanam campaigns, medical camps, spiritual discourses, and social welfare support, ABAP remains committed to elevating communities and assisting devotees on their sacred spiritual journeys.
                </p>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ 
                    borderLeft: '4px solid var(--abap-saffron)', 
                    paddingLeft: '20px',
                    margin: '10px 0'
                  }}>
                    <span style={{ 
                      display: 'block', 
                      fontWeight: 700, 
                      color: 'var(--abap-text-primary)',
                      fontSize: '1.1rem'
                    }}>Sri. K. Ayyappa Dass Ji</span>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--abap-gold)',
                      fontWeight: 500 
                    }}>National President, ABAP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Organization Info Section */}
            <div style={{ 
              background: 'var(--abap-bg-secondary)', 
              padding: '50px 60px', 
              borderRadius: '16px', 
              border: '1px solid rgba(212, 175, 55, 0.15)',
              marginTop: '60px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: '50px', 
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                {/* Trust Logo Column */}
                <div style={{ 
                  flex: '1 1 250px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{
                    padding: '12px',
                    background: '#fff',
                    borderRadius: '50%',
                    border: '2px solid rgba(212, 175, 55, 0.25)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'transform 0.3s ease'
                  }} className="trust-logo-hover">
                    <img 
                      src="/trust_logo.png" 
                      alt="ABAP Trust Logo" 
                      style={{ 
                        width: '180px', 
                        height: '180px', 
                        borderRadius: '50%',
                        objectFit: 'contain'
                      }} 
                    />
                  </div>
                  <h3 className="serif-text" style={{ color: 'var(--abap-text-primary)', fontSize: '1.25rem', marginBottom: '5px' }}>ABAP Trust</h3>
                  <p style={{ color: 'var(--abap-gold)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Official Committee Seal</p>
                  <p style={{ color: 'var(--abap-text-secondary)', fontSize: '0.8rem', fontWeight: 500 }}>Regd Trust Act No. 1799/2010(4)</p>
                </div>

                {/* Content Column */}
                <div style={{ flex: '2 1 500px' }}>
                  <h2 className="serif-text" style={{ 
                    color: 'var(--abap-text-primary)', 
                    fontSize: '2rem', 
                    marginBottom: '30px'
                  }}>Our Divine Mission & Legacy</h2>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                    gap: '30px'
                  }}>
                    <div>
                      <h4 className="serif-text" style={{ color: 'var(--abap-gold)', fontSize: '1.1rem', marginBottom: '10px' }}>Who We Are</h4>
                      <p style={{ color: 'var(--abap-text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                        Akhila Bharatheeya Ayyappa Dharma Prachara Sabha (ABAP) is a premier national organization with over 25 years of active participation in the propagation of Ayyappa cult and socio-religious Seva activities.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="serif-text" style={{ color: 'var(--abap-gold)', fontSize: '1.1rem', marginBottom: '10px' }}>Our Objective</h4>
                      <p style={{ color: 'var(--abap-text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                        Our primary objective is to spread the teachings of Lord Ayyappa, guide and assist pilgrims through their strict Vratham and Sabarimala Yatra, and initiate humanitarian welfare programs.
                      </p>
                    </div>

                    <div>
                      <h4 className="serif-text" style={{ color: 'var(--abap-gold)', fontSize: '1.1rem', marginBottom: '10px' }}>Universal Brotherhood</h4>
                      <p style={{ color: 'var(--abap-text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                        Irrespective of caste, creed, or religion, we embrace all as 'Swamis'. Under the noble guidance of ABAP leadership, we strive to build a peaceful world rooted in service and unity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <p style={{ color: 'var(--abap-text-secondary)', fontSize: '1.1rem', marginBottom: '25px' }}>
                Join us in our continuous mission to serve and propagate Ayyappa Dharma.
              </p>
              <button 
                className="public-btn" 
                style={{ padding: '15px 40px', fontSize: '1.1rem' }}
                onClick={() => window.location.href = '/dashboard'}
              >
                Become an Ayyappan
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
