import { useState } from "react";
export default function Candidate({ candidate, requiredSkills }) {
  const { email,  name, match, extra, availability } = candidate;
  const [showMatch, setShowMatch] = useState(false);

  console.log("RS:", requiredSkills.length)

  function showCandidateMatches() {
    setShowMatch(!showMatch);
  }
  return (
    <div
      className={`flex  gap-3 flex-wrap m-1 rounded-lg p-2 drop-shadow ${
        match && match.length === 0 ? "bg-red-400" : match && requiredSkills && match.length === requiredSkills.length ? "bg-green-300" : "bg-orange-300"
      } `}
    >
      <div>
        <p className="bg-slate-200 rounded uppercase font-bold text-slate-800">{name}</p>
      </div>
      <div>
        {" "}
        <p>Contact: {email}</p>
      </div>
      <div className="flex gap-2 flex-wrap text-sm">
        {/* <p>Skills: </p>
        {skills.map((skill) => (
          <p>{skill}</p>
        ))} */}
        {match && match.length > 0 && (
          <div className="flex flex-wrap">
            {" "}
            <button onClick={showCandidateMatches}>+</button>
            <div className="flex flex-wrap">
              <div className="flex flex-col">
                <p>Match: </p>
                {showMatch && match.map((match) => <p>{match}</p>)}
              </div>
              <div className="flex flex-col">
                <p>Extra : </p>
                {showMatch && extra.map((match) => <p>{match}</p>)}
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <p>Availability: {availability}</p>
      </div>
    </div>
  );
}
