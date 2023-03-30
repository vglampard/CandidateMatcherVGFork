import { useState } from "react";
import "./App.css";
import CandidateDisplay from "./components/CandidateDisplay/CandidateDisplay";
import Hero from "./components/Hero/Hero";
import Input from "./components/Input/Input";

export function App() {
  const [requiredSkills, setRequiredSkills] = useState([]);

  //console.log(requiredSkills, "Skills");

  return (
    <div className="bg-slate-400 w-full h-100vh p-10 flex flex-col ">
      <Hero/>
      <Input
        requiredSkills={requiredSkills}
        setRequiredSkills={setRequiredSkills}
      />
      <CandidateDisplay />
    </div>
  );
}

export default App;
