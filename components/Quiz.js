import { useState , useContext } from "react";
import { QuizContext } from './QuizContext';
import styles from '@/styles/Home.module.css'
import Image from "next/image";

//variable that turns high when it is clicked
var previous = false;

const Questions = [
    {
        prompt: "Did you take your pills today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",
        task: "take your pills today",
        imageLink: "/images/pills.jpeg",
    },
    {
        prompt: "Did you read the newspaper this morning?",
        optionA: "Yes",
        optionB: "No",
        answer: "A", 
        task: "read your newspaper",
        imageLink: "/images/news.jpeg",
    },
    {
        prompt: "Have you called a relative or friend today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",   
        task: "call a relative or friends today",
        imageLink: "/images/call.jpeg",
    },
    {
        prompt: "Did you take your drink more than 2L of water today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",
        task: "drink 2L of water today",
        imageLink: "/images/waterbottle.png",   
    },
    {
        prompt: "Did you have more than 7 hours of sleep last night?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",   
        task: "sleep more than 7 hours",
        imageLink: "/images/sleep.png",
    },
    {
        prompt: "Did you eat your fruits and vegetables today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A", 
        task: "eat your fruits and veggies",
        imageLink: "/images/fruits.jpeg",
    },
    {
        prompt: "Did you get at least 30 minutes of exercise today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A", 
        task: "exercise for at least 30 minutes today",
        imageLink: "/images/running.png",
    },
];

//register options to selected. destructure after using context to get desired info
const Quiz = () => {
    const { gameState, setGameState, score, setScore} = useContext(QuizContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
   //const [noQuestions, setNoQuestions] = useState([])
    //setNoQuestions(current => [...current, newNoQuestion])

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
                //alert(score);
                //send alert to let user know to complete the task
                alert("Be sure to complete this task by the end of the day.");
                //alert("Mike");
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
           