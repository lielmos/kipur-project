import React, { useEffect } from "react";
import "./EndingPage.css";

const EndingPage = (props) => {
    let winnigTeamName;
    if (props.teams["airplane"].score > props.teams["tank"].score) {
        winnigTeamName = "airplane";
    } else if (props.teams["tank"].score > props.teams["airplane"].score) {
        winnigTeamName = "tank";
    } else {
        winnigTeamName = "draw";
    }
    return (
        <div className="ending-page">
            <div className="ending-page-container">
                <div className="winner-container">
                    {winnigTeamName !== "draw" ?
                        <>

                            <h1 className="winner-text">
                                {props.teams[winnigTeamName].name}
                                <br></br>
                                זכתה בחידון!
                            </h1>
                            <div className={`${winnigTeamName}-logo-winner`}></div>
                        </>
                        :
                        <>
                            <h1 className="draw-text">
                                יש פה תיקו!
                            </h1>
                            <div className="draw-images-conatiner">
                                <div className="airplane-draw logo"></div>
                                <div className="tank-draw logo"></div>
                            </div>
                        </>
                    }
                </div>
                <div className="pointes-container">
                    {winnigTeamName !== "draw" ? <h1>{props.teams[winnigTeamName].score}</h1>: <h1>{props.teams["airplane"].score}</h1>}
                    <p>נקודות</p>
                </div>
            </div>
        </div>
    )
}
export default EndingPage;