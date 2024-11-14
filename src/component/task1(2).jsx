import React, { useState } from 'react';
import InputField from '../reuse/inputField';
import ButtonComponent from '../reuse/buttonComp';

const ArrayObject = () => {
  const [arrayInput, setArrayInput] = useState('');
  const [resultObject, setResultObject] = useState(null);

  const handleConvert = () => {
    const arr = arrayInput.split(',').map(item => item.trim());
    const objectValue = { result: arr };
    setResultObject(objectValue);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h2 style={{fontFamily:'cursive'}}><u>Task 2</u></h2>
      <h3 style={{ textAlign: 'center' }}>Array to Object</h3>
      <InputField placeholder="Enter Value" value={arrayInput} onChange={(e) => setArrayInput(e.target.value)} />
      <ButtonComponent onClick={handleConvert} style={{ marginTop: '10px', margin: 'auto', marginLeft: '40%' }} />
      
      {resultObject && (
        <div style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>
          <pre>{JSON.stringify(resultObject, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ArrayObject;
