// src/components/WhatsAppButton.js
'use client';

export default function WhatsAppButton({ price }) {
  const id = Math.random().toString(36).substring(2, 10); // Unique session ID

  const link = `https://wa.me/919591307164?text=Hi, I’m interested in gold at ₹${price}. My reference: ${id}`;

  const handleClick = () => {
    fetch('/api/log-lead', {
      method: 'POST',
      body: JSON.stringify({ id, price }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <a
      href={link}
      target="_blank"
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '50%',
        textDecoration: 'none',
        fontSize: '24px',
      }}
    >
      WhatsAppButton
    </a>
  );
}
