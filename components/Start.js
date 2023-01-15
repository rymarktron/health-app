import styles from '@/styles/Home.module.css'
import { use, useContext } from 'react';
import { QuizContext } from './QuizContext';
import Image from 'next/image';

const Start = () => {
    const {gameState, setGameState} = useContext(QuizContext)
    return ( 
        <>
            <div className={styles.title}>
                <h1>Welcome to Your Daily To Do List</h1>
            </div>
            <div className={styles.blurb}>
                <Image src="/todo.jpg" width = {500} height = {350}/>
                <h2>Click start to begin your daily checklist</h2>
                
                <button onClick ={() => {setGameState("quiz")}}>
                    Start
                </button>
            </div>
        </>
     );
}
 
export default Start;