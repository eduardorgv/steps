import "./App.css";
import { Stepper } from "./components/Stepper";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const NotOpenView = () => {
    return <h1>Not open...</h1>
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen ? <Stepper /> : <NotOpenView />}
    </>
  );
}

export default App;
