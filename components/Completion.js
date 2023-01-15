import styles from '@/styles/Home.module.css'
import { useState , useContext } from "react";
import { QuizContext } from './QuizContext';
import Image from 'next/image';
import Questions from './Questions';

/*const Print = () => {
    for (const element of noQuestions) {
        print(Questions[noQuestions[element]].task)
    }
}*/

// noQuestions.map(question => <p>{Questions[question].task}</p>)

//figure out how to randomize 
const Completion = () => {
    const { gameState, setGameState, score, setScore, noQuestions, setNoQuestions} = useContext(QuizContext)
    
    return ( 
        <div className={styles.end}>
            <h2>{"You have completed " + score + " / 7 of your tasks"}</h2>
            <Image src={"/gut.png"} width = {400} height = {300}/>
            
            {/* You answered "no" to: {...noQuestions} */}
            {/* {Print} */}

            {noQuestions.map(question => <p key={Questions[question].task}>{"Be sure to "+Questions[question].task}</p>)}

            {/* <NoQuestionsList noQuestions={noQuestions}/> */}
            <button onClick ={() => {
                setGameState("start")
                setScore(0)
                setNoQuestions([])
                }}>Fill again</button>
        </div>
     );
}
 
export default Completion;

//<h1>Good work!</h1>. {...noQuestions}