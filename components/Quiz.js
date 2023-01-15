import { useState , useContext } from "react";
import { QuizContext } from './QuizContext';
import styles from '@/styles/Home.module.css'
import Image from "next/image";

const Questions = [
    {
        prompt: "Did you take your pills today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",
        imageLink: "/images/pills.jpeg",
    },
    {
        prompt: "Did you read the newspaper this morning?",
        optionA: "Yes",
        optionB: "No",
        answer: "A", 
        imageLink: "/images/news.jpeg",
    },
    {
        prompt: "Have you called a relative or friend today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",   
        imageLink: "/images/call.jpeg",
    },
    {
        prompt: "Did you take your drink more than 2L of water today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",
        imageLink: "/images/waterbottle.png",   
    },
    {
        prompt: "Did you have more than 7 hours of sleep last night?",
        optionA: "Yes",
        optionB: "No",
        answer: "A",   
        imageLink: "/images/sleep.png",
    },
    {
        prompt: "Did you eat your fruits and vegetables today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A", 
        imageLink: "/images/fruits.jpeg",
    },
    {
        prompt: "Did you get 30 minutes of exercise today?",
        optionA: "Yes",
        optionB: "No",
        answer: "A", 
        imageLink: "/images/running.png",
    },
];

//register options to selected. destructure after using context to get desired info
const Quiz = () => {
    const { score, totalScore, setGameState} = useContext(QuizContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState("");
    
    const checker = () => {
        //questions done, no more. nein, au revoir. auf wiedesehen
        if(currentQuestion == Questions.length - 1){
            if(Questions[currentQuestion].answer == optionSelected) {
                totalScore(score + 1);
            }
            else{
                alert("Be sure to complete this task by the end of the day.");
            }
            setGameState("end");
        }

        else {           
            //give point 
            if(Questions[currentQuestion].answer == optionSelected) {
                totalScore(score + 1);
            }
            else {
                //alert(score);
                //send alert to let user know to complete the task
                alert("Be sure to complete this task by the end of the day.");
            }    
            //go to next question by adding 1 to the array index
            setCurrentQuestion(currentQuestion+1);
        }    
    }

    return ( 
        <>
            <div className={styles.blurb}>
                <h1>Quiz</h1>
                <h2>{Questions[currentQuestion].prompt}</h2>
                <Image src={Questions[currentQuestion].imageLink} width = {500} height = {350}/>
            </div>

            <div className = "flat">
                <button onClick={() =>{
                    setOptionSelected("A");
                    checker();
                }}> 
                    {Questions[currentQuestion].optionA}
                </button>

                <button onClick={() =>{
                    setOptionSelected("B");
                    checker();
                }}> 
                    {Questions[currentQuestion].optionB}
                </button>
            </div>

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
           