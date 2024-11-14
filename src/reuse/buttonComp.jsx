// ButtonComponent.jsx
import React from 'react';

const ButtonComponent = ({ onClick, text = "Submit", style }) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 12px', cursor: 'pointer', ...style }}>
      {text}
    </button>
  );
};

export default ButtonComponent;
