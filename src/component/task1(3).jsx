import React, { useState } from 'react';
import InputField from '../reuse/inputField';
import ButtonComponent from '../reuse/buttonComp';

const UniqueAgeFilter = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState([]);

  const filterUniqueAge = (inputArray) => {
    const filteredValue = inputArray.filter((item) => item > 18);
    const uniqueValue = [...new Set(filteredValue)];
    return uniqueValue;
  };

  const handleFilter = () => {
    const ageArray = inputValue.split(',').map(Number);
    const filteredResult = filterUniqueAge(ageArray);
    setResult(filteredResult);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto'}}>
      <h2 style={{fontFamily:'cursive'}}><u>Task 3</u></h2>
      <h3 style={{ textAlign: 'center' }}>Filter Values</h3>
      <InputField placeholder="Enter Value" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <ButtonComponent onClick={handleFilter} style={{ margin: 'auto', marginLeft: '45%' }} />
      
      {result.length > 0 && (
        <div style={{ marginTop: '20px', fontWeight: 'bold', marginLeft: '35%' }}>
          <p>Filtered Value:</p>
          <p>{result.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default UniqueAgeFilter;
