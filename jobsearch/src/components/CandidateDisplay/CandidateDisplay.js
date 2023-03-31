import React from "react";
import Candidate from "../Candidate/Candidate";
import { candidatesList } from "../../candidatesData/candidatesList";

export default function CandidateDisplay({ requiredSkills }) {
  return (
    <div className="p-4">
      {candidatesList.map((candidate) => {
        return (
          <div className="w-[80vw] lg:w-[65%] border flex flex-cols justify-center rounded">
            <Candidate candidate={candidate} requiredSkills={requiredSkills} />
          </div>
        );
      })}
    </div>
  );
}
