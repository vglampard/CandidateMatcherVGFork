import { useState } from "react";
import "./App.css";
import CandidateDisplay from "./components/CandidateDisplay/CandidateDisplay";
import Hero from "./components/Hero/Hero";
import Input from "./components/Input/Input";
import { candidatesList } from "./candidatesData/candidatesList";
import { candidateMatch } from "./util/match";
import AddJob from "./components/AddJob/AddJob";
import JobDisplay from "./components/JobDisplay/JobDisplay";

export function App() {
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [candidates, setCandidates] = useState(candidatesList);
  const [showCandidates, setShowCandidates] = useState(false)
  const [jobs, setJobs] = useState([])

// Need a component that allows users to add a job (title, required skills) to the jobs state array
// Need a job display component that renders content from the jobs state array as cards detailing title and skills, any shortlisted candidates, and a button that opens up a modal that displays candidates sorted and conditionally styled by suitability. 
// This modal needs to allow users to add specific candidates to a shortlist for that specific job, which pushes it to the jobs array. 
  function handleClick(candidates, requiredSkills, setCandidates) {
    candidateMatch(candidates, requiredSkills, setCandidates);
    setShowCandidates(true);
  }
console.log("CANDIDATeS:", candidates)
  return (
    <div className="w-full h-100vh p-10 flex flex-col justify-center items-center">
      <Hero />
      <Input
        requiredSkills={requiredSkills}
        setRequiredSkills={setRequiredSkills}
        candidates={candidates}
      />
      <AddJob/>
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
      <JobDisplay className=""/>
    </div>
  );
}

export default App;
