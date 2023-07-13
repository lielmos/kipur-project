import React from "react";
import "./Description.css";

const Description = (props) => {
    return (
        <>
            {/* <div className={props.question.media === undefined ? "question-description-container" : "question-description-container-flex"}>
                <p className="question-description">{props.question.explanation}</p>
                {props.question.media !== undefined && <img src={`./images/${props.question.media}`}/>}
            </div> */}
            <div className="question-description-container">
                <p className="question-description">{props.question.explanation}</p>
            </div>
            <button className="next-btn" onClick={props.MoveToLevels}>המשך</button>
        </>
    )
}
export default Description;