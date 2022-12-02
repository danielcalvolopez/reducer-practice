import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../redux/store/store";

const SearchBox = () => {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  return (
    <input
      placeholder="Search"
      value={search}
      onChange={(event) => {
        dispatch(setSearch(event.target.value));
      }}
    />
  );
};

export default SearchBox;
