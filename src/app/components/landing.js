import './landing.css'
const LandingHero = () => (
  <section className="hero-section">
    <div className="hero-background">
      <div className="hero-overlay"></div>
    </div>
    
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text">Trusted Since 2021</span>
        </div>
        
        <h1 className="hero-title">
          Your Premier
          <span className="title-highlight"> Gold Trading </span>
          Partner in Mangalore
        </h1>
        
        <p className="hero-description">
          Experience seamless gold trading with Mangalore`&apos;s most trusted name. 
          We offer competitive rates, secure transactions, and expert guidance 
          for all your precious metal investments.
        </p>
        
        <div className="hero-features">
          <div className="feature-item">
            <div className="feature-icon">💰</div>
            <span>Best Market Rates</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <span>Secure Trading</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📈</div>
            <span>Expert Guidance</span>
          </div>
        </div>
        
        <div className="hero-actions">
          <button className="btn-primary">
            Sell Gold
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary">
            View Live Rates
          </button>
        </div>
        
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-number">500+</span>
            <span className="trust-label">Happy Customers</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">₹500Lkh+</span>
            <span className="trust-label">Gold Traded</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">5+</span>
            <span className="trust-label">Years Experience</span>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="gold-card">
          <div className="card-header">
            <h3>Today`&apos;s Gold Rate</h3>
            <span className="live-indicator">● LIVE</span>
          </div>
          <div className="rate-display">
            <span className="rate-value">₹6,245</span>
            <span className="rate-unit">per gram</span>
          </div>
          <div className="rate-change positive">
            <span>+₹45 (+0.73%)</span>
          </div>
          <div className="card-footer">
            <small>Last updated: 2 mins ago</small>
          </div>
        </div> 
        
        <div className="floating-elements">
          <div className="float-element gold-coin"></div>
          <div className="float-element gold-bar-landing"></div>
          <div className="float-element sparkle sparkle-1"></div>
          <div className="float-element sparkle sparkle-2"></div>
          <div className="float-element sparkle sparkle-3"></div>
        </div>
      </div>
    </div>
  </section>
);

export default LandingHero;