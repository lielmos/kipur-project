import React, { useState } from "react";
import "./ChoosingTeamsPage.css";
import { useNavigate } from "react-router-dom";

const ChoosingTeamsPage = (props) => {
    let navigate = useNavigate();
    const [teamName1, setTeamName1] = useState("");
    const [teamName2, setTeamName2] = useState("");
    const [errorMessage, seterrorMessage] = useState(false);

    const handleChangeName1 = (event) => {
        const initialResult = event.target.value.replace(/[^א-ת,a-z,0-9]/gi, '');
        const result = initialResult.replace(/\,/g, '');
        setTeamName1(result);
    }

    const handleChangeName2 = (event) => {
        const initialResult = event.target.value.replace(/[^א-ת,a-z,0-9]/gi, '');
        const result = initialResult.replace(/\,/g, '');
        setTeamName2(result);
    }

    const handleClick = () => {
        if (teamName1.length > 1 && teamName2.length > 1) {
            props.setTeams({
                "airplane": { "name": teamName1, "score": 0},
                "tank": { "name": teamName2, "score": 0}
            })
            navigate("/QuestionsPage");
        } else {
            seterrorMessage(true);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className="choosing-teams-page">
            <div className="choosing-teams-page-container">
                <div className="teams-img-container">
                    <div className="airplane-teams logo"></div>
                    <div className="tank-teams logo"></div>
                </div>
                <div className="teams-names-container">
                    <input name="1"
                        className="team-1-name team-name"
                        type="text"
                        placeholder="קבוצה 1"
                        value={teamName1}
                        onChange={handleChangeName1}
                        onKeyDown={handleKeyDown}></input>
                    <input name="2"
                        className="team-2-name team-name"
                        type="text"
                        placeholder="קבוצה 2"
                        value={teamName2}
                        onChange={handleChangeName2}
                        onKeyDown={handleKeyDown}></input>
                </div>
                <button className="choosing-names-btn" onClick={handleClick}>לחידון</button>
                {errorMessage && <p className="error-message-text">עליכם לבחור שמות לשתי הקבוצות</p>}
            </div>
        </div>
    )
}
export default ChoosingTeamsPage;
