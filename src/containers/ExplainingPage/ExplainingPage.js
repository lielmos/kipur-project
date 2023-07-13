import React from "react";
import "./ExplainingPage.css";
import { useNavigate } from "react-router-dom";

const ExplainingPage = () => {
    let navigate = useNavigate();
    const MoveToNextPage = (event) => {
        navigate("/ChoosingTeamsPage");
    };
    return (
        <div className="explaining-page">
            <div className="explaining-page-container">
                <h1>הוראות</h1>
                <p className="explaining-page-text">לפניכם לומדה הכוללת חידון על מלחמת כיפור.
                    <br></br>
                    עליכם להתחלק לשתי קבוצות.
                    <br></br>
                    בתורה, כל קבוצה בוחרת את רמת הקושי של השאלה עליה צריכה לענות.
                    <br></br>
                    קל 10 נקודות,
                    בינוני 20 נקודות,
                    קשה 30 נקודות,
                    הניקוד מוצג במעלה המסך לאורך החידון.
                    <br></br>
                    הקבוצה שתגיע למספר הנקודות הגבוה ביותר היא הקבוצה המנצחת!
                    אז בואו נתחיל!!!
                </p>
                <button className="explaining-page-btn" onClick={MoveToNextPage}>לבחירת קבוצות</button>
            </div>
        </div>
    )
}
export default ExplainingPage;