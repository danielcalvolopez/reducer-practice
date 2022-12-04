import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import PokemonList from "./components/PokemonList";
import SearchBox from "./components/SearchBox";
import { PokemonContextProvider } from "./components/useContext/PokemonContext";

import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PokemonContextProvider>
        <div className="App">
          <SearchBox />
          <PokemonList />
        </div>
      </PokemonContextProvider>
    </Provider>
  );
};

export default App;
