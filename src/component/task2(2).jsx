import React, { useState } from "react";
import InputField from "../reuse/inputField";
import ButtonComponent from "../reuse/buttonComp";

const GetArrayElements = () => {
  const [arrayInput, setArrayInput] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    const array = arrayInput.split(",").map(Number).filter(num => !isNaN(num));
    const slicedArray = array.slice(1, 5);
    setResult(slicedArray);
  };

  const handleInputChange = (value) => {
    const validatedValue = value.replace(/[^0-9,]/g, "");
    setArrayInput(validatedValue);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
        <h2 style={{fontFamily:'cursive'}}><u>Task 2</u></h2>
        <h3 style={{ marginLeft: '40%' }}>Get Elements</h3>

      <InputField
        value={arrayInput}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Enter values"
      />

      <ButtonComponent
        onClick={handleSubmit}
        text="Get Elements"
        style={{ backgroundColor: "green", color: "white", borderRadius: "5px",
        }}
      />
      <h4 style={{ marginTop: "20px" }}>Result:</h4>
      <p>{result.length > 0 ? result.join(", ") : ""}</p>
    </div>
  );
};

export default GetArrayElements;
