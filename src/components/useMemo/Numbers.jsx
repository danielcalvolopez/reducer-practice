import { useState, useMemo, useCallback } from "react";
import SortedList from "../useCallback/SortedList";

const Numbers = () => {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((accumulator, number) => accumulator + number, 0),
    [numbers]
  );

  const [names] = useState(["Mike", "Jack", "Max", "Marcos"]);

  //   const sortedNames = useMemo(() => [...names].sort(), [names]);

  // NO NEED TO USE USEMEMO (SIMPLE CALCULATIONS)

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const totalCount = count1 + count2;

  const sortFunction = useCallback(
    (string1, string2) => string1.localeCompare(string2),
    []
  );

  return (
    <div>
      <div>Total: {total}</div>

      <SortedList sortFunction={sortFunction} list={names} />

      <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      <div>Total: {totalCount}</div>
    </div>
  );
};

export default Numbers;
