import React from 'react';
import './StepsSection.css';

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      icon: "📞",
      title: "Call or Visit",
      description: "Contact us or visit our store in Mangalore for a free consultation and gold evaluation"
    },
    {
      id: 2,
      icon: "⚖️",
      title: "Gold Assessment",
      description: "Our certified experts accurately weigh and test your gold using advanced equipment"
    },
    {
      id: 3,
      icon: "💰",
      title: "Live Price Quote",
      description: "Get instant quotes based on current market rates with transparent pricing"
    },
    {
      id: 4,
      icon: "🤝",
      title: "Instant Payment",
      description: "Receive immediate cash payment or bank transfer once you accept our offer"
    }
  ];

  return (
    <section id="steps" className="steps-section">
      <div className="steps-container">
        <div className="steps-header">
          <h2 className="steps-title">How It Works</h2>
          <p className="steps-subtitle">
            Simple, transparent, and secure gold trading process in Mangalore
          </p>
        </div>
        
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.id}</div>
              {/* <div className="step-icon">{step.icon}</div> */}
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="steps-cta">
          <div className="cta-content">
            <h3>Ready to sell your gold?</h3>
            <p>Visit us in Mangalore or call for current gold rates</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Get Live Rates</button>
              <button className="cta-btn secondary">Visit Store</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;