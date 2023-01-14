import styles from '@/styles/Home.module.css'
import { use, useContext } from 'react';
import { QuizContext } from './QuizContext';


const Start = () => {
    const {gameState, setGameState} = useContext(QuizContext)
    return ( 
        <div>
        <h1>Start Quiz</h1>
            <div className={styles.title}>
                <h1>Welcome to Your To Do List</h1>
            </div>

            <div className={styles.blurb}>
                <h2>Click start to begin your daily checklist</h2>
                
                <button onClick ={() => {setGameState("quiz")}}>
                    Start
                </button>
            </div>
        </div>
     );
}
 
export default Start;