import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data.json";

function App() {
  return (
    <div className="App row p-5">
      <Header />
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default App;
