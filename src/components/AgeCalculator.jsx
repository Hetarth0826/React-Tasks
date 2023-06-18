import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>Age Calculator</h2>
      </div>
      <div>
        <label>Enter your date of birth</label>
      </div>
      <div>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateAge}>Calculate Age</button>
      </div>

      {age > 0 && <p>You are {age} years old.</p>}
    </div>
  );
};

export default AgeCalculator;
