import { useReducer } from "react";

const NamesList = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <div className="App">
      <input
        type="text"
        value={state.name}
        onChange={(event) =>
          dispatch({ type: "SET_NAME", payload: event.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>

      {state.names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default NamesList;
