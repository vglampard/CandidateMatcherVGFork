import { useState } from "react";
export default function Candidate({ candidate, requiredSkills }) {
  const { email, name, match, extra, availability } = candidate;
  const [showMatch, setShowMatch] = useState(false);

  function showCandidateMatches() {
    setShowMatch(!showMatch);
  }
  return (
    <div
      className={`flex gap-3 flex-wrap m-1 w-[100%] rounded-lg p-2 drop-shadow ${
        match && match.length === 0
          ? "bg-red-400"
          : match && requiredSkills && match.length === requiredSkills.length
          ? "bg-green-300"
          : "bg-orange-300"
      } `}
    >
      <div className="flex w-[100%] gap-4 items-stretch ">
        <button onClick={showCandidateMatches}>+</button>
        <p className=" m-2 rounded uppercase font-bold text-slate-800">
          {name}
        </p>
      </div>

      <div className="flex gap-8 flex-wrap w-[100%] text-sm">
        {showMatch && (
          <div className="w-[100%] bg-slate-50 rounded m-3">
            <p className="bg-white m-1 p-2">Contact: {email}</p>
            <div className=" m-1 p-2 flex-col w-full flex gap-3 rounded">
              {match && match.length > 0 && (
                <div className="flex items-center ">
             <p>✅</p>
                  <div className="flex gap-2 p-2 bg-green-50">
                    {match.map((match) => (
                      <p>{match}</p>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-2 p-2">
                <p>❓</p>
                {showMatch && extra.map((match) => <p>{match}</p>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
