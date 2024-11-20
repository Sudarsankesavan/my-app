import React from 'react';

const ButtonComponent = ({ onClick, text = "Submit", style }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', transition: 'background-color 0.3s ease', ...style, marginLeft:"45%"
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = 'red')}
      onMouseOut={(e) => (e.target.style.backgroundColor = 'green')}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
