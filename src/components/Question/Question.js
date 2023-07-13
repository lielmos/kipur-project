import React, { useState, useEffect } from "react";
import "./Question.css";
import OptionBtnConatiner from "../../containers/OptionBtnConatiner/OptionBtnConatiner";
import Description from "../Description/Description";
import data from "../../data.json";

const Question = (props) => {
    const [isAnswerRight, setIsAnswerRight] = useState();
    const [pressedOptionId, setPressedOptionId] = useState();
    const [showDescription, setShowDescription] = useState(false);
    const currentCounter = props.counters[props.level];
    const question = data[props.level][currentCounter];

    const scores = {
        "easy": 10,
        "medium": 20,
        "hard": 30
    }

    useEffect(() => {
        if (isAnswerRight !== undefined) {
            if (isAnswerRight) {
                props.setTeams(prevTeams => ({
                    ...prevTeams,
                    [props.currTeam]: {...prevTeams[props.currTeam], "score": prevTeams[props.currTeam].score + scores[props.level]}
                }))            
            }
            setTimeout(() => {
                setShowDescription(true);
            }, 1000);
        }
    }, [isAnswerRight]);

    return (
        <>
            <div className={`curr-team curr-team-${props.currTeam}`}></div>
            <div className="question-headline-container">
                <h2>{question.questionText}</h2>
            </div>
            {!showDescription ?
                <OptionBtnConatiner
                    level={props.level}
                    setIsAnswerRight={setIsAnswerRight}
                    isAnswerRight={isAnswerRight}
                    setPressedOptionId={setPressedOptionId}
                    pressedOptionId={pressedOptionId}
                    question={question}
                />
                :
                <Description
                    MoveToLevels={props.MoveToLevels}
                    question={question}
                />
            }
        </>
    )
}
export default Question;