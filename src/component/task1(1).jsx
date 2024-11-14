import React, { useState } from 'react';
import InputField from '../reuse/inputField';
import ButtonComponent from '../reuse/buttonComp';

const LetterCheck = () => {
  const [str1, setStr1] = useState('');
  const [str2, setStr2] = useState('');
  const [result, setResult] = useState('');

  const wordsCheck = (string1, string2) => {
    const formatString = (str) => str.toLowerCase().split('').sort().join('');
    return formatString(string1) === formatString(string2);
  };

  const handleCheck = () => {
    const isCheck = wordsCheck(str1, str2);
    setResult(isCheck ? "True" : "False");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h2 style={{fontFamily:'cursive'}}><u>Task 1</u></h2>
      <h3 style={{ marginLeft: '30%' }}>Find Strings Match</h3>
      <InputField placeholder="Enter string" value={str1} onChange={(e) => setStr1(e.target.value)} />
      <InputField placeholder="Enter string" value={str2} onChange={(e) => setStr2(e.target.value)} />
      <ButtonComponent onClick={handleCheck} style={{ marginLeft: '40%' }} />
      {result && (
        <p style={{ marginTop: '20px', marginLeft: '45%', fontWeight: 'bold', color: result === "True" ? 'green' : 'red' }}>
          {result}
        </p>
      )}
    </div>
  );
};

export default LetterCheck;
