import { useState , useContext } from "react";
import { QuizContext } from './QuizContext';
import styles from '@/styles/Home.module.css'

const Questions = [
    {
        prompt: "Did you take your pills today?",
        optionA: "yes",
        optionB: "no",
        answer: "A",
    },
    {
        prompt: "Did you read the newspaper this morning?",
        optionA: "yes",
        optionB: "no",
        answer: "A", 
    },
    {
        prompt: "Have you called a relative or friend today?",
        optionA: "yes",
        optionB: "no",
        answer: "A",   
    },
    {
        prompt: "Did you take your drink more than 2L of water today?",
        optionA: "yes",
        optionB: "no",
        answer: "A",   
    },
    {
        prompt: "Did you have more than 7 hours of sleep last night?",
        optionA: "yes",
        optionB: "no",
        answer: "A",   
    },
    {
        prompt: "Did you eat your fruits and vegetables today?",
        optionA: "yes",
        optionB: "no",
        answer: "A", 
    },
    {
        prompt: "Did you get 30 minutes of exercise today?",
        optionA: "yes",
        optionB: "no",
        answer: "A", 
    },
];

//register options to selected. destructure after using context to get desired info
const Quiz = () => {
    const { score, totalScore, setGameState} = useContext(QuizContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState("");
    
    const nextQuestion = () => {
        if(Questions[currentQuestion].answer == optionSelected) {
            totalScore(score + 1);
        }
        else {
            alert(score);
        }
        setCurrentQuestion(currentQuestion+1);
    }

    const finishQuiz = () => {
        if(Questions[currentQuestion].answer == optionSelected) {
            totalScore(score + 1);
        }
        setGameState("end");
    }

    return ( 
        <>
            <div className={styles.blurb}>
                <h1>Quiz</h1>
                <h2>{Questions[currentQuestion].prompt}</h2>
            </div>

            <div className = "options">
                <button onClick={() =>setOptionSelected("A")}> {Questions[currentQuestion].optionA}</button>
                <button onClick={() =>setOptionSelected("B")}> {Questions[currentQuestion].optionB}</button>
            </div>

            {currentQuestion == Questions.length - 1 ? (
                <button onClick ={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}> Next Question </button>
            )}
        </>
     );
}
 
export default Quiz;