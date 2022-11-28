import { useEffect, useRef, useState } from "react";

const Input = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setNames] = useState([]);

  const onAddName = (event) => {
    setNames([...names, inputRef.current.value]);
    inputRef.current.value = "";
  };
  return (
    <div>
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
      <input ref={inputRef} type="text" />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
};

export default Input;
