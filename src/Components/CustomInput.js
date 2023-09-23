import React, { useState } from "react";

const CustomInput = ({ label }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className={`input-container ${focused ? "focused" : ""}`}>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label>{label}</label>
    </div>
  );
};

export default CustomInput;
