import './header.css';

const Header = () => (
  <header className="main-header">
    <div className="header-content">
      <div className="logo-container">
        <img src="/satya_gold_logo.png" alt="Satya Gold Company Logo" className="logo" />
      </div>
      <div className="brand-section">
        <div className="site-title">Sathya Gold Company</div>
        <div className="tagline">Premium Gold Trading</div>
      </div>
    </div>
    <div className="header-ornament"></div>
  </header>
);

export default Header;
