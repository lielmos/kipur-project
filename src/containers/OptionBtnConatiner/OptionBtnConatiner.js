import React from "react";
import "./OptionBtnConatiner.css";
import "../../components/OptionBtn/OptionBtn";
import OptionBtn from "../../components/OptionBtn/OptionBtn";

const OptionBtnConatiner = (props) => {

    const PressQptionBtn = (event) => {
        props.setPressedOptionId(event.currentTarget.id);
        if (props.question.rightAnswerIndex == event.currentTarget.id) {
            props.setIsAnswerRight(true);
        } else {
            props.setIsAnswerRight(false);
        }
    };

    return (
        <div className="option-btn-container">
            {props.question.answers.map((answer, index) => {
                return (
                    <OptionBtn
                        key={index}
                        id={index}
                        answerText={answer}
                        question={props.question}
                        PressQptionBtn={PressQptionBtn}
                        isAnswerRight={props.isAnswerRight}
                        pressedOptionId={props.pressedOptionId}
                    ></OptionBtn>
                );
            })}
        </div>
    )
}
export default OptionBtnConatiner;