import { useEffect, useState } from "react";

const Names = () => {
  const [names, setNames] = useState([]);
  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  useEffect(() => {
    fetch("/names.json")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((res) => res.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div>
      {names.map((name, index) => (
        <button onClick={() => onSelectedNameChange(name)} key={index}>
          {name}
        </button>
      ))}

      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
};

export default Names;
