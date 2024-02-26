import React, { useState } from 'react';
import './CopyText.css'; 

const CopyText = ({ text }) => {
  const [tooltip, setTooltip] = useState('Click to copy');

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(text).then(() => {
      setTooltip('Copied!');
      setTimeout(() => setTooltip('Click to copy'), 2000); // Reset tooltip message after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <span className="copyTextContainer" onClick={copyToClipboard} onMouseLeave={() => setTooltip('Click to copy')}>
      {text}
      <span className="tooltip">{tooltip}</span>
    </span>
  );
};

export default CopyText;
