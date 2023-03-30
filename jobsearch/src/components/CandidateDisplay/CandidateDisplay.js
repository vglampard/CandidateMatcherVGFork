import React from "react";
import Candidate from "../Candidate/Candidate";
import { candidatesList } from "../../candidatesData/candidatesList";

export default function CandidateDisplay() {
  return (
    <div className="p-4">
      {candidatesList.map((candidate) => {
        return (
          <div className="bg-slate-100 w-[90%] flex flex-cols justify-center rounded">
            <Candidate
              candidate={candidate}
            />
          </div>
        );
      })}
    </div>
  );
}
