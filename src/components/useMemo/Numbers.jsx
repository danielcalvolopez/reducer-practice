import { useState, useMemo } from "react";

const Numbers = () => {
  const [numbers, setNumbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((accumulator, number) => accumulator + number, 0),
    [numbers]
  );

  return <div>Total: {total}</div>;
};

export default Numbers;
