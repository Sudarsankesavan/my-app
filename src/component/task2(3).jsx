import React, { useState } from "react";
import InputField from "../reuse/inputField";
import ButtonComponent from "../reuse/buttonComp";

const SeparateObjectsFromUserInput = () => {
  const [countryCode, setCountryCode] = useState("");
  const [name, setName] = useState("");
  const [allStates, setAllStates] = useState([]);
  const [countryCodes, setCountryCodes] = useState([]);
  const [names, setNames] = useState([]);

  const handleAddState = () => {
    if (countryCode.trim() && name.trim()) {
      const newState = { countryCode, name };
      const updatedStates = [...allStates, newState];
      setAllStates(updatedStates);
      setCountryCodes(updatedStates.map((state) => ({ countryCode: state.countryCode })));
      setNames(updatedStates.map((state) => ({ name: state.name })));
      setCountryCode("");
      setName("");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
        <h2 style={{fontFamily:'cursive'}}><u>Task 3</u></h2>
        <h3 style={{ marginLeft: '10%' }}>Enter the Country Code and Name</h3>
      
      <InputField
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        placeholder="Enter Country Code"
      />
      
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Country Name"
      />

      <ButtonComponent
        onClick={handleAddState}
        text="Add State"
        style={{ marginTop: "10px" }}
      />

      <h4>Country Codes:</h4>
      <ul>
        {countryCodes.map((code, index) => (
          <li key={index}>{`{ countryCode: '${code.countryCode}' }`}</li>
        ))}
      </ul>

      <h4>Names:</h4>
      <ul>
        {names.map((nameObj, index) => (
          <li key={index}>{`{ name: '${nameObj.name}' }`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeparateObjectsFromUserInput;
