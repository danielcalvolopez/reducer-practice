import { useMemo } from "react";

const SortedList = ({ list, sortFunction }) => {
  console.log("SortedList render");
  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunction);
  }, [list, sortFunction]);

  return <div>{sortedList.join(", ")}</div>;
};

export default SortedList;
