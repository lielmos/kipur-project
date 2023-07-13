import React from "react";
import "./OptionBtn.css";

const OptionBtn = (props) => {
    return (
        <button
            className={`option-button 
            ${props.pressedOptionId == props.id &&
                (props.isAnswerRight
                    ? "right-answer-background-color"
                    : "wrong-answer-background-color")} 
                    ${(props.isAnswerRight !== undefined && props.question.rightAnswerIndex === props.id) && "right-answer-background-color"}`}
            id={props.id}
            onClick={props.isAnswerRight == undefined ? props.PressQptionBtn : undefined}
        >
            {props.answerText}
        </button>
    )
}
export default OptionBtn;


