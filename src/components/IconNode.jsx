import React from 'react';

const IconNode = ({ icon, text, description }) => {
  return (
    <>
      <span style={{ fontSize: '2rem' }}>{icon}</span>
      <br />
      <span style={{ color: 'black', fontWeight: '600', fontSize: '16px' }}>
        {text}
      </span>
      <br />
      <br />
      {description && (
        <p style={{ color: 'black', fontSize: '12px' }}>{description}</p>
      )}
    </>
  );
};

export default IconNode;
