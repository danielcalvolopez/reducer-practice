import "./App.css";
import NamesList from "./components/NamesList";
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <div className="App">
      <UserForm />
      <NamesList />
    </div>
  );
};

export default App;
