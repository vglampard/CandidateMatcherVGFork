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

  console.log(candidates, "CANDIDASTE ASSESED?");
  function handleClick(candidates, requiredSkills, setCandidates) {
    candidateMatch(candidates, requiredSkills, setCandidates);
  }

  return (
    <div className="bg-slate-400 w-full h-100vh p-10 flex flex-col ">
      <Hero/>
      <Input
        requiredSkills={requiredSkills}
        setRequiredSkills={setRequiredSkills}
        candidates={candidates}
      />
       <button
        onClick={() =>
          handleClick(candidates, requiredSkills, setCandidates)
        }
      >
        Get your candidate
      </button>
      <CandidateDisplay />
    </div>
  );
}

export default App;
