import React from "react";
import Candidate from "../Candidate/Candidate";
import { candidatesList } from "../../candidatesData/candidatesList";

export default function CandidateDisplay() {
  return (
    <div className="p-4">
      {candidatesList.map((candidate) => {
        return (
          <div className="bg-yellow-100">
            <Candidate
              name={candidate.name}
              email={candidate.email}
              skills={candidate.skills}
              availability={candidate.availability}
            />
          </div>
        );
      })}
    </div>
  );
}
