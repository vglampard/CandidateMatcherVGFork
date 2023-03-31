import { useState } from "react";
export default function Candidate({ candidate, requiredSkills }) {
  const { email, name, match, extra, availability } = candidate;
  const [showMatch, setShowMatch] = useState(false);

  console.log("RS:", requiredSkills.length);

  function showCandidateMatches() {
    setShowMatch(!showMatch);
  }
  return (
    <div
      className={`flex  gap-3 flex-wrap m-1 w-[100%] rounded-lg p-2 drop-shadow ${
        match && match.length === 0
          ? "bg-red-400"
          : match && requiredSkills && match.length === requiredSkills.length
          ? "bg-green-300"
          : "bg-orange-300"
      } `}
    >
      <div className="flex w-full gap-4 items-stretch ">
        <button onClick={showCandidateMatches}>+</button>
        <p className=" m-2 rounded uppercase font-bold text-slate-800">
          {name}
        </p>
      </div>

      <div className="flex gap-8 flex-wrap text-sm">
        {showMatch && (
          <div>
            <p className="bg-white ">Contact: {email}</p>
<div className="bg-orange-700 flex gap-3 rounded">
            {match && match.length > 0 && (
              <div className="flex flex-col bg-orange-50 ">
                <p>Match: </p>
                {match.map((match) => (
                  <p>{match}</p>
                ))}
              </div>
            )}
            <div className="flex flex-col">
              <p>Other : </p>
              {showMatch && extra.map((match) => <p>{match}</p>)}
            </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
