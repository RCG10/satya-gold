// src/components/ContactSection.js
'use client';
import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const phoneNumber = "+919538833655"; // Replace with actual number
  const whatsappNumber = "919538833655"; // Replace with actual number
  const address = "ground floor, Poonja arcade, KSR Road, Hampankatta, Mangaluru, Karnataka 575001";
  const businessHours = [
    { day: "Monday - Saturday", time: "9:00 AM - 8:00 PM" },
    { day: "Sunday", time: "10:00 AM - 6:00 PM" }
  ];

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hi! I want to sell my gold for cash. Can you help me with the best rates?";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com?q=${encodedAddress}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Get instant cash for your gold with the best rates in Bengaluru. Visit our store or contact us for immediate evaluation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          {/* WhatsApp Card */}
          <div className="contact-card whatsapp-card" onClick={handleWhatsApp}>
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>WhatsApp Chat</h3>
              <p>Get instant quotes for your gold</p>
              <span className="contact-action">Get Quote Now</span>
            </div>
            <div className="contact-arrow">→</div>
          </div>

          {/* Phone Card */}
          <div className="contact-card phone-card" onClick={handleCall}>
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Call Us</h3>
              <p>Speak with our gold evaluation experts</p>
              <span className="contact-number">{phoneNumber}</span>
            </div>
            <div className="contact-arrow">→</div>
          </div>

          {/* Location Card */}
          <div className="contact-card location-card" onClick={handleDirections}>
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Visit Our Store</h3>
              <p>Get your gold evaluated and cash instantly</p>
              <span className="contact-action">Get Directions</span>
            </div>
            <div className="contact-arrow">→</div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p className="hours-subtitle">Walk-in for instant gold evaluation and cash payment</p>
          <div className="hours-grid">
            {businessHours.map((schedule, index) => (
              <div key={index} className="hours-item">
                <span className="day">{schedule.day}</span>
                <span className="time">{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map and Address */}
        <div className="map-section">
          <div className="address-card">
            <div className="address-header">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Our Location</h3>
            </div>
            <p className="address-text">{address}</p>
            <button className="directions-btn" onClick={handleDirections}>
              Get Directions
            </button>
          </div>

          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5993467045164!2d74.8417661!3d12.8691344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bd375b92f73%3A0x931562181e99490a!2sSATHYA%20GOLD%20COMPANY!5e0!3m2!1sen!2sin!4v1754684572978!5m2!1sen!2sin" 
            width="600" height="450" 
            style={{border:0} }
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="quick-action-btn whatsapp-btn" onClick={handleWhatsApp}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
            </svg>
            WhatsApp for Quote
          </button>
          
          <button className="quick-action-btn call-btn" onClick={handleCall}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;