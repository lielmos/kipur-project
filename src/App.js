import './App.css';
import OpeningPage from "./containers/OpeningPage/OpeningPage";
import ExplainingPage from "./containers/ExplainingPage/ExplainingPage";
import ChoosingTeamsPage from "./containers/ChoosingTeamsPage/ChoosingTeamsPage";
import QuestionsPage from "./containers/QuestionsPage/QuestionsPage";
import EndingPage from "./containers/EndingPage/EndingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [teams, setTeams] = useState({
    "airplane": { "name": "", "score": 0},
    "tank": { "name": "", "score": 0}
});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact path="/" element={<OpeningPage />}
          />
          <Route
            exact path="/ExplanationPage" element={<ExplainingPage />}
          />
          <Route
            exact path="/ChoosingTeamsPage"
            element={
              <ChoosingTeamsPage
                setTeams={setTeams}
              />}
          />
          <Route
            exact path="/QuestionsPage"
            element={<QuestionsPage
              teams={teams}
              setTeams={setTeams}
            />}
          />
          <Route
            exact path="/EndingPage"
            element={<EndingPage teams={teams}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;