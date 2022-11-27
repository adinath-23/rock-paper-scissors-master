import ButtonLayout from "./components/ButtonLayout";
import "./index.css";
import Header from "./components/Header";
import Result from "./components/Result";
import { useContext, useState } from "react";
import RpsContext from "./store/rps-ctx";
import rules from "./assets/image-rules.svg";

function App() {
  const [showRules, setShowRules] = useState(false);
  const rpsCtx = useContext(RpsContext);
  const toggleRules = () => {
    setShowRules((pre) => !pre);
  };

  return (
    <>
      <Header />
      <main>
        {showRules && (
          <div onClick={toggleRules} className="rules">
            <div>
              <h2>RULES</h2>
              <img src={rules} alt="rules" />
            </div>
          </div>
        )}
        {rpsCtx.showResult ? <Result /> : <ButtonLayout />}
      </main>
      <footer>
        <button onClick={toggleRules}>rules</button>
      </footer>
    </>
  );
}

export default App;
