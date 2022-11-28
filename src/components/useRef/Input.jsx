import { useEffect, useRef, useState } from "react";

const Input = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: "Sara" },
    { id: idRef.current++, name: "Max" },
  ]);

  const onAddName = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };
  return (
    <div>
      {names.map(({ name, id }) => (
        <div key={id}>
          {id} - {name}
        </div>
      ))}
      <input ref={inputRef} type="text" />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
};

export default Input;
