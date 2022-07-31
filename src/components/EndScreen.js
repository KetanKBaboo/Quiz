import "../Styles/Common.css"
import { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName,setUserName } = useContext(
    QuizStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setUserName("")

  };
  return (
    <div className="EndScreen">
      <h1>{userName}</h1> 
      <h3>You Finished the Quiz !</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;