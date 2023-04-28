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
    
    //add Twilio API to send to phone
    const [loadingTwilio, setLoadingTwilio]= useState(false)
    const [phone, setPhone] = useState('')
 
    const sendMessage = (e) => {

        e.preventDefault()

        const accountSid = process.env.NEXT_PUBLIC_TWILIO_SID;
        const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
        const from = process.env.NEXT_PUBLIC_FROM_PHONE_NUMBER;
        
        //let imageT = document.getElementById('imageGenerated')
        //console.log(imageT.src)
        const data = new FormData();
        data.append('To', phone);
        data.append('From', from);
        //data.append('Body', 'Here is a copy of your custom ad');
        data.append('Body', `Here is a list of the parammeters used to generate your ad copy:\n-Gender: ${gender}\n-Ethnicity: ${ethnicity}\n-Hair color: ${hairColor}\n-Age: ${age}\n-Facial Hair: ${facialHair}\n-Glasses: ${glasses}\n-Earrings: ${earrings}\n-Tatoos: ${tattoos}\n-Time of Day: ${timeOfDay}\n-Location: ${locations}\n-Product: ${productType}\n`);
        //data.append('MediaUrl', 'https://demo.twilio.com/owl.png')
        setLoadingTwilio(true)


        fetch('https://api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json', {
            method: 'post',
            body: data,
            headers: {
                'Authorization': 'Basic ' + btoa(accountSid + ':' + authToken),
            },
        }).then(response => {
            if (response.ok) {
                setLoadingTwilio(false)
                setLoading(false)
                setOpenDialog(false)
            } else {
                console.log('Error sending text message: ' + response.status);
            }
        }).catch(error => {
            console.log('Error sending text message: ' + error);
        });
    };


    return ( 
        <div className={styles.end}>
            <h2>{"You have completed " + score + " / 7 of your tasks"}</h2>
            <Image src={"/gut.png"} width = {400} height = {300}/>
            
            {/* You answered "no" to: {...noQuestions} */}
            {/* {Print} */}

            {noQuestions.map(question => <h3 key={Questions[question].task}>{"Be sure to "+Questions[question].task}</h3>)}

            {/* <NoQuestionsList noQuestions={noQuestions}/> */}
            

            <form onSubmit={sendMessage} className="text-white flex flex-col items-center">
    <input
        value={phone}
        type="tel"
        className="my-2"
        required
        onChange={(e) => setPhone(e.target.value)}
    />
    <button
        disabled={loadingTwilio}
        className="text-center w-24 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:hover:bg-gray-400 rounded-md h-10"
        type="submit"
    >
        {!loadingTwilio ? (
            'Send to Phone'
        ) : (
            <svg
                className="animate-spin h-5 w-5 text-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c1.735 0 3.34-.564 4.659-1.512l-2.175-3.762A3.993 3.993 0 0112 16c-1.081 0-2.061-.438-2.767-1.144L6 17.29z"
                ></path>
            </svg>
        )}
    </button>
</form>
            
            <button onClick ={() => {
                setGameState("start")
                setScore(0)
                setNoQuestions([])
                }}>Fill Again</button>
        </div>
        
     );
}
 
export default Completion;

//<h1>Good work!</h1>. {...noQuestions}
