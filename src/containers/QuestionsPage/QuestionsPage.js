import React, { useEffect, useState } from "react";
import "./QuestionsPage.css";
import ChoosingLevel from "../../components/ChoosingLevel/ChoosingLevel";
import Question from "../../components/Question/Question";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";

const QuestionsPage = (props) => {
    let navigate = useNavigate();
    const [level, setLevel] = useState(null);
    const [currTeam, setCurrTeam] = useState('airplane');
    const [counters, setCounters] = useState(
        {
            "easy": 0,
            "medium": 0,
            "hard": 0
        }
    );

    const MAX_QUESTIONS = data["easy"].length + data["medium"].length + data["hard"].length

    const MoveToQuestion = (event) => {
        setLevel(event.target.id);
    }

    const MoveToLevels = (event) => {
        setCounters(prevCounters => ({
            "easy": level === "easy" ? prevCounters.easy + 1 : prevCounters.easy,
            "medium": level === "medium" ? prevCounters.medium + 1 : prevCounters.medium,
            "hard": level === "hard" ? prevCounters.hard + 1 : prevCounters.hard
        }))
        if(counters.easy + counters.medium + counters.hard === MAX_QUESTIONS - 1) {
            // console.log("finished");
            navigate("/EndingPage");
        }
        setLevel(null);
        setCurrTeam(prevTeam => prevTeam === 'airplane' ? 'tank' : 'airplane');
    }

    return (
        <div className="choosing-level-page">
            <div className="choosing-level-page-container">
                <div className="teams-img-logo-container">
                    <div className="airplane-logo logo"></div>
                    <div className="tank-logo logo"></div>
                </div>
                <div className="teams-container">
                    <div>
                        <p className="name">{props.teams.airplane.name}</p>
                        <p className="score">{props.teams.airplane.score}</p>
                    </div>
                    <div>
                        <p className="name">{props.teams.tank.name}</p>
                        <p className="score">{props.teams.tank.score}</p>
                    </div>
                </div>
                {level === null
                    ?
                    <ChoosingLevel
                        MoveToQuestion={MoveToQuestion}
                        currTeam={currTeam}
                        counters={counters}
                    />
                    :
                    <Question
                        level={level}
                        MoveToLevels={MoveToLevels}
                        currTeam={currTeam}
                        counters={counters}
                        setTeams={props.setTeams}
                    />}
            </div>
        </div>
    )
}
export default QuestionsPage;