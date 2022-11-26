import { useState, useMemo } from "react";

const Numbers = () => {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((accumulator, number) => accumulator + number, 0),
    [numbers]
  );

  const [names] = useState(["Mike", "Jack", "Max", "Marcos"]);

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <div>
      <div>Total: {total}</div>
      <div>{names.join(", ")}</div>
      <div>
        Names:
        {sortedNames.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
