import React from 'react';

const InputField = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ 
        display: 'block', 
        width: '300px', 
        marginBottom: '10px', 
        padding: '10px', 
        margin:'10px',
        textAlign: 'center', 
        border: '1px solid #ccc', 
        borderRadius: '5px', 
        fontSize: '16px'}}
    />
  );
};

export default InputField;
