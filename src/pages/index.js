import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState , useContext} from 'react'
import Start from 'components/Start'
import Quiz from 'components/Quiz'
import End from 'components/Completion'

//context used to give access throughout components
import { QuizContext } from 'components/QuizContext'

export default function Home() {
  const [gameState, setGameState] = useState("start");

  return (
    <>
      <Head>
        <title>To Be or Not To Be</title>
        <meta name="description" content="Healthcare app to share" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <QuizContext.Provider value ={{ gameState, setGameState }}>
        {gameState === "start" && <Start />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}
      </QuizContext.Provider>
    </>
  )
}
