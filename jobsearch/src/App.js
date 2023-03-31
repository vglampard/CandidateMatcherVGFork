import { useState } from "react";
import "./App.css";
import CandidateDisplay from "./components/CandidateDisplay/CandidateDisplay";
import Hero from "./components/Hero/Hero";
import Input from "./components/Input/Input";
import { candidatesList } from "./candidatesData/candidatesList";
import { candidateMatch } from "./util/match";

export function App() {
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [candidates, setCandidates] = useState(candidatesList);
  const [showCandidates, setShowCandidates] = useState(false)

  function handleClick(candidates, requiredSkills, setCandidates) {
    candidateMatch(candidates, requiredSkills, setCandidates);
    setShowCandidates(true);
  }

  return (
    <div className="bg-slate-100 w-full h-100vh p-10 flex flex-col justify-center items-center">
      <Hero />
      <Input
        requiredSkills={requiredSkills}
        setRequiredSkills={setRequiredSkills}
        candidates={candidates}
      />
      {requiredSkills.length > 0 && (
        <>
          <button className=" p-2 rounded drop-shadow-lg bg-slate-700 text-white uppercase"
            onClick={() =>
              handleClick(candidates, requiredSkills, setCandidates)
            }
          >
            Match candidates
          </button>
          {showCandidates && <CandidateDisplay requiredSkills={requiredSkills} /> }
         
        </>
      )}
    </div>
  );
}

export default App;
