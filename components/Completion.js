import styles from '@/styles/Home.module.css'
import { useState , useContext } from "react";
import { QuizContext } from './QuizContext';
import Image from 'next/image';

//figure out how to randomize 
const Completion = () => {
    const { gameState, setGameState, score, setScore} = useContext(QuizContext)
    
    return ( 
        <div className={styles.end}>
            <h2>{"You have completed " + score + " / 7 of your tasks"}</h2>
            <Image src={"/gut.png"} width = {500} height = {350}/>
            
            <button onClick ={() => {
                setGameState("start")
                setScore(0)
                }}>Fill again</button>
        </div>
     );
}
 
export default Completion;

//<h1>Good work!</h1>