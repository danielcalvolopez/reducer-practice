import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Heading from "./components/ typescript/Heading";
import { PokemonContextProvider } from "./components/useContext/PokemonContext";

import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PokemonContextProvider>
        <div className="App">
          <Heading title={"Hello"} />
        </div>
      </PokemonContextProvider>
    </Provider>
  );
};

export default App;
