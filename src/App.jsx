import "./App.css";
import Title from "./components/Title";
import Presentation from "./components/Presentation";
import galaxie from "./img/galaxy.avif";
function App() {
  return (
    <>
      <div className="App">
        <h1>Bonjour à tous</h1>
      </div>
      <p>Salut</p>
      <Title name={"Voici un titre de niveau 2"} age={25} color={"green"} />
      <Title name={"Un autre titre"} color={"blue"} />
      <Presentation name="Tom" age="26" />
      <img src={galaxie} alt="" />
    </>
  );
}

export default App;
