import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // Import the styles

const ToggleComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <Toggle checked={isChecked} onChange={handleChange} />
    </label>
  );
};

export default ToggleComponent;
