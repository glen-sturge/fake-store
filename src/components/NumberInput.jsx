import { useState } from "react";

function NumberInput() {
  const [value, setValue] = useState(0);

  const inputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue >= 0 ? newValue : 0);
  };

  const upButton = () => {
    setValue(value + 1);
  };

  const downButton = () => {
    setValue(value - 1 >= 0 ? value - 1 : 0);
  };

  return (
    <div className="number-input">
      <input type="number" value={value} onChange={inputChange} min={0} />
      <div className="number-input-buttons">
        <button onClick={upButton}>▲</button>
        <button onClick={downButton}>▼</button>
      </div>
    </div>
  );
}

export default NumberInput;
