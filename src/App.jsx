import { useReducer } from "react";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
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

      <div>{state.name}</div>
    </div>
  );
};

export default App;
