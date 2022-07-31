import "../Styles/Common.css"
import { useContext } from "react";
import { QuizStateContext } from "../Helpers/Context";

function Menu() {
  const { setGameState,userName, setUserName } = useContext(
    QuizStateContext
  );
  const handleStartButton=()=>{
      if(userName===""){
        alert("please enter your name !!")
        return
      }
      else{
        setGameState("playing");
      }
  }
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="John Doe"
        value={userName}
        onChange={(event)=>setUserName(event.target.value)}
      />
      <button
        onClick={() => {
            handleStartButton()
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;