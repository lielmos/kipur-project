import React from "react";
import "./ChoosingLevel.css";
import data from "../../data.json";
const ChoosingLevel = (props) => {

    return (
        <>
                <div className={`team-img-${props.currTeam}`}></div>
                <h2>בחרו דרגת קושי</h2>
                <div className="levels-container">
                     <button 
                    className="level-btn" 
                    id="easy" 
                    onClick={props.MoveToQuestion} 
                    disabled={props.counters["easy"] >= data["easy"].length}>קל</button>
                    <button 
                    className="level-btn" 
                    id="medium" 
                    onClick={props.MoveToQuestion}
                    disabled={props.counters["medium"] >= data["medium"].length}>בינוני</button>
                    <button 
                    className="level-btn" 
                    id="hard" 
                    onClick={props.MoveToQuestion}
                    disabled={props.counters["hard"] >= data["hard"].length}>קשה</button>
                </div>
        </>
    )
}
export default ChoosingLevel;