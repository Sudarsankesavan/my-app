import React from 'react';

const InputField = ({ value, onChange, placeholder }) => {
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={onChange}
      style={{
        display: 'block', width: '100%', marginBottom: '10px', padding: '8px', textAlign: 'center',
      }}/>
  );
};

export default InputField;
