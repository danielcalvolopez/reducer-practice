import { useEffect, useState } from "react";

const Names = () => {
  const [names, setNames] = useState([]);

  fetch("/names.json")
    .then((res) => res.json())
    .then((data) => setNames(data));

  return <div>Names: {names.join(", ")}</div>;
};

export default Names;
