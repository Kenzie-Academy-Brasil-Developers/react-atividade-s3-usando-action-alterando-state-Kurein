import "./App.css";
import UserCard from "./components/UserCard/UserCard";
import { useSelector } from "react-redux";

function App() {
  const { name } = useSelector((state) => state.user);

  return (
    <div className="App">
      <p>Nome: {name}</p>
      <UserCard />
    </div>
  );
}

export default App;
