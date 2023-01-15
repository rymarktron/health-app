import { useState , useContext } from "react";
import { QuizContext } from './QuizContext';
import styles from '@/styles/Home.module.css'
import Image from "next/image";
import Questions from "./Questions";

//variable that turns high when it is clicked
var previous = false;

//register options to selected. destructure after using context to get desired info
const Quiz = () => {
    const { gameState, setGameState, score, setScore, noQuestions, setNoQuestions} = useContext(QuizContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    //array for no questions. append only numbers
    // const [noQuestions, setNoQuestions] = useState([])

    const checker = (optionSelected) => {
        //questions done, no more. nein, au revoir. auf wiedesehen
        
        if(currentQuestion == Questions.length - 1){
            if(Questions[currentQuestion].answer == optionSelected) {
                setScore(
                    (currentScore) => {
                        return currentScore +1
                    }
                );
                //alert("Robert");
            }
            else{
                alert("Be sure to complete this task by the end of the day.");
                //alert("Megan");

                //append to array using ... javascript, output will be given in the end
                setNoQuestions(current => [...current, currentQuestion]); //+1
            }
            setGameState("end");
        }

        else {           
            //give point 
            if(Questions[currentQuestion].answer == optionSelected) {
                setScore(
                    (currentScore) => {
                        return currentScore +1
                    }
                );
                //alert("Victoria");
            }
            else {
                //send alert to let user know to complete the task
                alert("Be sure to complete this task by the end of the day.");
                //alert("Mike");'

                //append to array using ... javascript, output will be given in the end
                setNoQuestions(current => [...current, currentQuestion]);
            }
        }    
    }

    const water = (optionSelected) => {
        checker(optionSelected);

        //synchronous function. need to render synchronizely until it is done
        setCurrentQuestion(
            (current) => {
                return current +1
            }
        );
    }

    return ( 
        <>
            <div className={styles.blurb}>
                <h1>Quiz</h1>
                <h2>{Questions[currentQuestion].prompt}</h2>
                <Image src={Questions[currentQuestion].imageLink} width = {500} height = {350}/>
            </div>


            <>
                <button onClick={() =>{
                    water("A")
                }}> 
                    {Questions[currentQuestion].optionA}
                </button>

                <button onClick={() =>{
                    water("B")
                }}> 
                    {Questions[currentQuestion].optionB}
                </button>
            </>

        </>
     );
}
 
export default Quiz;

/*
            {currentQuestion == Questions.length - 1 ? (
                <button onClick ={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}> Next Question </button>
            )}
            */
           