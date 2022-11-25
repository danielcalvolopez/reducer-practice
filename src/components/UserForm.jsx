import { useReducer } from "react";

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(event) => {
          dispatch({ first: event.target.value });
        }}
      />
      <input
        type="text"
        value={state.last}
        onChange={(event) => {
          dispatch({ last: event.target.value });
        }}
      />

      <div>First: {state.first}</div>
      <div>Last: {state.last}</div>
    </div>
  );
};

export default UserForm;
