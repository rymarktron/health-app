import styles from '@/styles/Home.module.css'
import { useState , useContext } from "react";
import { QuizContext } from './QuizContext';

//figure out how to randomize 
const Completion = () => {
    const { setGameState} = useContext(QuizContext)
    
    return ( 
        <div className={styles.end}>
            <h2>You have completed your tasks</h2>
            <h1>Good work!</h1>
            <button onClick ={() => {setGameState("start")}}>Fill again</button>
        </div>
     );
}
 
export default Completion;