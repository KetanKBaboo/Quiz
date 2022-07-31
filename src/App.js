import './App.css';
import { QuizStateContext } from './Helpers/Context';
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";

function App() {
    const [gameState, setGameState] = useState("menu");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);
  return (
    <div className="App">
       <h1>Quiz App</h1>
      <QuizStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </QuizStateContext.Provider>
    </div>
  );
}
export default App;

