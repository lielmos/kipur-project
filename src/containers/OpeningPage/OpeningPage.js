import React from "react";
import "./OpeningPage.css";
import { useNavigate } from "react-router-dom";

const OpeningPage = () => {
    let navigate = useNavigate();
    const MoveToNextPage = (event) => {
        navigate("/ExplanationPage");
    };
    return (
        <div className="opening-page">
            <div className="opening-page-container">
                <button className="opening-page-btn" onClick={MoveToNextPage}>בואו נתחיל</button>
                <h2>בסימן ניצחון הרוח</h2>
                <h1>50 שנים למלחמת יום כיפור</h1>
                <div className="logos-div">
                    <div className="shalhevet-logo logo"></div>
                    <div className="idf-logo logo"></div>
                    <div className="kipur-logo logo"></div>
                </div>
            </div>
        </div>
    )
}
export default OpeningPage;