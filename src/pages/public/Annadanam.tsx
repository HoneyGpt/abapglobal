import React, { useEffect, useState } from 'react';

const Annadanam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState(false);
  const upiId = "kvbupiqr.105000000006002@kvb";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div style={{ paddingTop: '120px', minHeight: '90vh', background: 'var(--abap-bg-primary)' }}>
        <div className="section" style={{ paddingTop: '60px' }}>
          
          {/* Sacred Telugu Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="animate-fade-in">
            <h2 style={{ 
              color: 'var(--abap-gold)', 
              fontSize: '1.8rem', 
              fontWeight: 700, 
              marginBottom: '10px'
            }}>ఓం శ్రీ స్వామియే శరణం అయ్యప్ప</h2>
            
            <h3 className="serif-text" style={{ 
              color: 'var(--abap-text-primary)', 
              fontSize: '1.5rem', 
              fontWeight: 700,
              marginBottom: '8px'
            }}>అఖిల భారతీయ అయప్పధర్మ ప్రచారసభ (ABAP)</h3>
            
            <p style={{ 
              color: 'var(--abap-text-secondary)', 
              fontSize: '0.9rem', 
              fontWeight: 600,
              letterSpacing: '1px',
              marginBottom: '12px'
            }}>REGISTRATION ID: 1799/2010 (4)</p>
            
            <div style={{ 
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FFFBF2 0%, #FFF5E1 100%)',
              border: '1px dashed var(--abap-saffron)',
              padding: '6px 20px',
              borderRadius: '8px',
              color: 'var(--abap-gold)',
              fontSize: '1.2rem',
              fontWeight: 700
            }}>
              అన్నదాత సుఖీభవ
            </div>
          </div>
          
          <div style={{ width: '80px', height: '3px', background: 'var(--abap-saffron)', margin: '0 auto 50px' }}></div>
          
          {/* Main Content Layout */}
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              gap: '50px', 
              alignItems: 'stretch',
              flexWrap: 'wrap'
            }}>
              
              {/* Left Column: Appeal and Pricing List */}
              <div style={{ flex: '1 2 550px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="serif-text" style={{ 
                    color: 'var(--abap-text-primary)', 
                    fontSize: '1.6rem', 
                    marginBottom: '20px',
                    borderLeft: '4px solid var(--abap-saffron)',
                    paddingLeft: '15px'
                  }}>అన్నప్రసాద వితరణ సేవకు సహకారం అందించండి</h3>
                  
                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: 1.8, 
                    color: 'var(--abap-text-secondary)',
                    marginBottom: '30px',
                    textAlign: 'justify'
                  }}>
                    అయ్యప్ప స్వాములకు అన్నప్రసాద వితరణ సేవలో భాగంగా శబరిమల, ఎరుమేలి నుండి పంబ మార్గంలో 
                    <strong> నారాయణ తోడు</strong> వద్ద ఏబీఏపీ అన్నదాన మందిరం నందు శబరిమల వెళ్ళు అయ్యప్ప స్వాములకు అన్నప్రసాద వితరణ 
                    సేవా కార్యక్రమం నిర్వహించబడుతుంది. కావున దాతలను వినమ్రముగా ఆహ్వానిస్తున్నాం. మీ భక్తి పూర్వక 
                    సహకారం ఈ మహా పుణ్యకార్యంలో భాగస్వామ్యం అవుతుంది.
                  </p>

                  {/* Pricing Cards */}
                  <h4 className="serif-text" style={{ 
                    color: 'var(--abap-text-primary)', 
                    fontSize: '1.2rem', 
                    marginBottom: '15px' 
                  }}>అన్నదాన వితరణ సేవా రుసుములు:</h4>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                    gap: '20px',
                    marginBottom: '30px'
                  }}>
                    {/* Price Item 1 */}
                    <div style={{ 
                      background: 'var(--abap-bg-secondary)', 
                      padding: '20px', 
                      borderRadius: '12px',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                      textAlign: 'center'
                    }}>
                      <p style={{ color: 'var(--abap-text-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>పూర్తి రోజు (Full Day)</p>
                      <h4 className="serif-text" style={{ color: 'var(--abap-gold)', fontSize: '1.8rem', fontWeight: 700 }}>₹ 50,000</h4>
                    </div>

                    {/* Price Item 2 */}
                    <div style={{ 
                      background: 'var(--abap-bg-secondary)', 
                      padding: '20px', 
                      borderRadius: '12px',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                      textAlign: 'center'
                    }}>
                      <p style={{ color: 'var(--abap-text-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>ఒక పూట (One Meal)</p>
                      <h4 className="serif-text" style={{ color: 'var(--abap-gold)', fontSize: '1.8rem', fontWeight: 700 }}>₹ 20,000</h4>
                    </div>

                    {/* Price Item 3 */}
                    <div style={{ 
                      background: 'var(--abap-bg-secondary)', 
                      padding: '20px', 
                      borderRadius: '12px',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                      textAlign: 'center'
                    }}>
                      <p style={{ color: 'var(--abap-text-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>ఉదయం అల్పాహారం (Breakfast)</p>
                      <h4 className="serif-text" style={{ color: 'var(--abap-gold)', fontSize: '1.8rem', fontWeight: 700 }}>₹ 15,000</h4>
                    </div>

                    {/* Price Item 4 */}
                    <div style={{ 
                      background: 'var(--abap-bg-secondary)', 
                      padding: '20px', 
                      borderRadius: '12px',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                      textAlign: 'center'
                    }}>
                      <p style={{ color: 'var(--abap-text-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px' }}>రాత్రి అల్పాహారం (Dinner)</p>
                      <h4 className="serif-text" style={{ color: 'var(--abap-gold)', fontSize: '1.8rem', fontWeight: 700 }}>₹ 15,000</h4>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  background: 'linear-gradient(135deg, #FFFBF2 0%, #FFF5E1 100%)', 
                  border: '1px solid rgba(212, 175, 55, 0.25)', 
                  borderRadius: '10px',
                  padding: '15px 20px',
                  textAlign: 'center',
                  fontWeight: 700,
                  color: 'var(--abap-gold)',
                  fontSize: '1.15rem'
                }}>
                  శ్రీ అయ్యప్ప స్వామివారి కృపకు పాత్రులుకండి 🙏
                </div>
              </div>
              
              {/* Right Column: Scan to Pay Box */}
              <div style={{ flex: '1 1 380px' }}>
                <div style={{ 
                  background: 'var(--abap-bg-secondary)', 
                  padding: '40px 30px', 
                  borderRadius: '16px', 
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  boxShadow: '0 15px 35px rgba(212, 175, 55, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  justifyContent: 'center'
                }}>
                  <h3 className="serif-text" style={{ 
                    color: 'var(--abap-text-primary)', 
                    fontSize: '1.3rem', 
                    fontWeight: 700,
                    marginBottom: '20px'
                  }}>Scan to Pay / సహకారం అందించండి</h3>
                  
                  {/* QR Scanner Container */}
                  <div style={{
                    padding: '15px',
                    background: '#fff',
                    borderRadius: '16px',
                    border: '2px solid rgba(212, 175, 55, 0.2)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                    marginBottom: '25px',
                    maxWidth: '240px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                  }} className="trust-logo-hover">
                    <img 
                      src="/qr_code.png" 
                      alt="ABAP Trust UPI QR Code" 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block'
                      }} 
                    />
                  </div>

                  {/* Payment Details */}
                  <div style={{ width: '100%', padding: '0 10px' }}>
                    <p style={{ 
                      color: 'var(--abap-text-secondary)', 
                      fontSize: '0.8rem', 
                      fontWeight: 700, 
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '4px'
                    }}>Merchant Name</p>
                    
                    <h4 className="serif-text" style={{ 
                      color: 'var(--abap-text-primary)', 
                      fontSize: '1rem', 
                      fontWeight: 700,
                      lineHeight: 1.5,
                      marginBottom: '15px'
                    }}>
                      AKHILA BHARATHEEYA AYYAPPA DHARMA<br />
                      PRACHARA SABHA TRUST
                    </h4>

                    <p style={{ 
                      color: 'var(--abap-text-secondary)', 
                      fontSize: '0.8rem', 
                      fontWeight: 700, 
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '4px'
                    }}>UPI ID</p>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      background: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      gap: '10px',
                      marginBottom: '15px'
                    }}>
                      <span style={{ 
                        color: 'var(--abap-text-primary)', 
                        fontSize: '0.9rem', 
                        fontWeight: 600,
                        wordBreak: 'break-all'
                      }}>{upiId}</span>
                      
                      <button 
                        onClick={handleCopy}
                        style={{ 
                          background: 'none', 
                          border: 'none', 
                          color: 'var(--abap-gold)', 
                          cursor: 'pointer',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          textTransform: 'uppercase',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.15)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>

                    <p style={{ 
                      color: 'var(--abap-text-secondary)', 
                      fontSize: '0.8rem', 
                      lineHeight: 1.5,
                      fontStyle: 'italic'
                    }}>
                      * Scan with any mobile UPI app like GPay, PhonePe, BHIM, or Paytm to donate directly.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Annadanam;
