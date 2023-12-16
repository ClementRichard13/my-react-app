import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="App">
        <h1>Bonjour à tous</h1>
      </div>
      <p>Salut</p>
      <Title name={"Voici un titre de niveau 2"} />
    </>
  );
}

export default App;
