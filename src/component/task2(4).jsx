import React, { useState } from "react";
import InputField from "../reuse/inputField";
import ButtonComponent from '../reuse/buttonComp';

const CombineArrays = () => {
  const [array1, setArray1] = useState("");
  const [array2, setArray2] = useState("");
  const [resultArray, setResultArray] = useState([]);

  const handleInputChange = (value, setter) => {
    const validatedValue = value.replace(/[^0-9,]/g, "");
    setter(validatedValue);
  };

  const handleCombine = () => {
    const arr1 = array1.split(",").map(Number).filter(num => !isNaN(num));
    const arr2 = array2.split(",").map(Number).filter(num => !isNaN(num));
    const combinedArray = [...arr1, ...arr2];
    setResultArray(combinedArray);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
    <h2 style={{fontFamily:'cursive'}}><u>Task 4</u></h2>
      <h3 style={{ marginLeft: '20%' }}>Combine and Sort Arrays</h3>
      <div>
        <label>Array 1:</label>
        <InputField
          value={array1}
          onChange={(e) => handleInputChange(e.target.value, setArray1)}
          placeholder="Enter values"
        />
      </div>
      
      <div>
        <label>Array 2:</label>
        <InputField style={{marginTop:'10'}}
          value={array2}
          onChange={(e) => handleInputChange(e.target.value, setArray2)}
          placeholder="Enter values"
        />
      </div>
      
      <ButtonComponent onClick={handleCombine} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Combine
      </ButtonComponent>

      <p>{resultArray.join(", ") || ""}</p>
    </div>
  );
};

export default CombineArrays;
