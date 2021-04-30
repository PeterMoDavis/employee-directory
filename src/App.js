import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import ListContainer from "./components/ListContainer";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchInput />
      <ListContainer />
    </div>
  );
}

export default App;
