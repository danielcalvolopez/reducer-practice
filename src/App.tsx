import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/ typescript/Counter";
import Heading from "./components/ typescript/Heading";
import Section from "./components/ typescript/Section";
import { PokemonContextProvider } from "./components/useContext/PokemonContext";

import { store } from "./redux/store/store";

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Provider store={store}>
      <PokemonContextProvider>
        <div className="App">
          <Heading title={"Hello"} />
          <Section>This is the children</Section>
          <Counter setCount={setCount}>Count is {count}</Counter>
        </div>
      </PokemonContextProvider>
    </Provider>
  );
};

export default App;
