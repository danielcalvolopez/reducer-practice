import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/ typescript/Counter";
import Footer from "./components/ typescript/Footer";
import Heading from "./components/ typescript/Heading";
import List from "./components/ typescript/List";
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
          <List
            items={["Spain", "Emgland", "Brazil"]}
            render={(item: string) => <span>{item}</span>}
          />
          <Footer />
        </div>
      </PokemonContextProvider>
    </Provider>
  );
};

export default App;
