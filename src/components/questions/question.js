import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// import './questions.css'
const Question = ({ question, answer }) => {
    const [showInfo, setShowInfo] = useState(false);
    return <article className="question1">
        <header>
            <h4>{question}</h4>
            <button className="btn1" onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {showInfo && <p>{answer}</p>}
    </article>;
}
export default Question;

{/* <div id="rotate" className="question my-4 px-3" 
        onMouseOver={() => setDisplay(false)} 
        onMouseOut={() => setDisplay(true)}>
            {display ? question : answer}
</div> */}