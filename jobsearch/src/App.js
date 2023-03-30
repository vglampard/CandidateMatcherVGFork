import { useState } from "react";
import "./App.css";
import CandidateDisplay from "./components/CandidateDisplay/CandidateDisplay";
import Input from "./components/Input/Input";

export function App() {
  const [requiredSkills, setRequiredSkills] = useState();
  console.log(requiredSkills, "Skills");
  return (
    <div className="bg-red-100 w-full h-100vh">
      <Input
        requiredSkills={requiredSkills}
        setRequiredSkills={setRequiredSkills}
      />
      <CandidateDisplay />
    </div>
  );
}

export default App;
