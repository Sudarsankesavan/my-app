import React, { useState } from "react";
import InputField from "../reuse/inputField";
import ButtonComponent from '../reuse/buttonComp';

const CombineAndSortArrays = () => {
  const [array1, setArray1] = useState("");
  const [array2, setArray2] = useState("");
  const [array3, setArray3] = useState("");
  const [resultArray, setResultArray] = useState([]);

  const handleInputChange = (value, setter) => {
    const validatedValue = value.replace(/[^0-9,]/g, "");
    setter(validatedValue);
  };

  const handleCombineAndSort = () => {
    const arr1 = array1.split(",").map(Number).filter(num => !isNaN(num));
    const arr2 = array2.split(",").map(Number).filter(num => !isNaN(num));
    const arr3 = array3.split(",").map(Number).filter(num => !isNaN(num));
    const combinedArray = [...arr1, ...arr2, ...arr3].sort((a, b) => a - b);
    setResultArray(combinedArray);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
    <h2 style={{fontFamily:'cursive'}}><u>Task 1</u></h2>
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
      
      <div>
        <label>Array 3:</label>
        <InputField
          value={array3}
          onChange={(e) => handleInputChange(e.target.value, setArray3)}
          placeholder="Enter values"
        />
      </div>
      
      <ButtonComponent onClick={handleCombineAndSort} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Combine and Sort
      </ButtonComponent>

      <p>{resultArray.join(", ") || ""}</p>
    </div>
  );
};

export default CombineAndSortArrays;
