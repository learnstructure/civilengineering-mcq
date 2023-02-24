import { useRef, useState } from 'react';
//import AudioPlayer from './AudioPlayer';
export default function Mcq(props) {
    /*  const audio = new Audio();
     audio.src = "./correctOption.wav"; */
    const audioRef = useRef(null);


    const [optClassA, setOptClassA] = useState(null)

    function handleClickA() {
        if (props.correct === "a") {
            // audio.play();
            const audioElement = audioRef.current;
            audioElement.play();
            setOptClassA("correctAnswer")

        }
        else { setOptClassA("wrongAnswer") }
    }
    const [optClassB, setOptClassB] = useState(null)
    function handleClickB() {
        if (props.correct === "b") {
            //audio.play();
            const audioElement = audioRef.current;
            audioElement.play();
            setOptClassB("correctAnswer");
        }
        else { setOptClassB("wrongAnswer") }
    }
    const [optClassC, setOptClassC] = useState(null)
    function handleClickC() {
        if (props.correct === "c") {
            //  audio.play();
            const audioElement = audioRef.current;
            audioElement.play();
            setOptClassC("correctAnswer");
        }
        else { setOptClassC("wrongAnswer") }
    }
    const [optClassD, setOptClassD] = useState(null)
    function handleClickD() {
        if (props.correct === "d") {
            // audio.play();
            const audioElement = audioRef.current;
            audioElement.play();
            setOptClassD("correctAnswer");
        }
        else { setOptClassD("wrongAnswer") }
    }
    return (
        <div className="mcq">
            <div>{props.serialno}. {props.question}</div>
            <div className="option">
                <div>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionA`} value="a" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionA`}
                        onClick={handleClickA} id={optClassA}>a) {props.optionA}</label>

                </div>
                <div>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionB`} value="b" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionB`}
                        onClick={handleClickB} id={optClassB}>b) {props.optionB}</label>
                </div>
                <div>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionC`} value="c" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionC`}
                        onClick={handleClickC} id={optClassC}>c) {props.optionC}</label>
                </div>
                <div>
                    <input type="radio" name={`${props.serialno}options`} id={`${props.serialno}optionD`} value="d" style={{ display: 'none' }} />
                    <label htmlFor={`${props.serialno}optionD`}
                        onClick={handleClickD} id={optClassD}>d) {props.optionD}</label>
                </div>
                <audio ref={audioRef}>
                    <source src="/correctOption.wav" type="audio/wav" />
                </audio>


                {/* <p onClick={handleClickA} className={optClassA}> a) {props.optionA}</p>
                <p onClick={handleClickB} className={optClassB}> b) {props.optionB}</p>
                <p onClick={handleClickC} className={optClassC}> c) {props.optionC}</p>
                <p onClick={handleClickD} className={optClassD}> d) {props.optionD}</p> */}
            </div>
            <hr></hr>
            {/* <Discussion id={props.id} /> */}
        </div>
    )
}

//className={props.correct == "a" ? 'correctAnswer' : null}
