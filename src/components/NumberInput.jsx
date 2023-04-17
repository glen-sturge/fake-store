import { useState } from "react";

function NumberInput() {
  const [value, setValue] = useState(0);

  const InputChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue >= 0 ? newValue : 0);
  };

  const UpButton = () => {
    setValue(value + 1);
  };

  const DownButton = () => {
    setValue(value - 1 >= 0 ? value - 1 : 0);
  };

  return (
    <div className="number-input">
      <input type="number" value={value} onChange={InputChange} min={0} />
      <div className="number-input-buttons">
        <button onClick={UpButton}>▲</button>
        <button onClick={DownButton}>▼</button>
      </div>
    </div>
  );
}

export default NumberInput;
