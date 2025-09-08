import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import RecursosPremium from "./components/RecursosPremium/RecursosPremium";
import Rodape from "./components/Rodape/Rodape";
import ScriptPremium from "./components/ScriptPremium/ScriptPremium";
import Section from "./components/Section/Section";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Section />
        <RecursosPremium />
        <ScriptPremium />
        <Aside />
        <Rodape />
      </div>
    </div>
  );
}

export default App;
