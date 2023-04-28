import { useState } from "react";
export default function Candidate({ candidate, requiredSkills }) {
  const { email, name, match, extra, availability } = candidate;
  const [showMatch, setShowMatch] = useState(false);

  function showCandidateMatches() {
    setShowMatch(!showMatch);
  }

  // Need an onClick function that adds this candidate to the shortlist for the job the modal is currently displaying.

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
      <div className="flex w-[100%] gap-4 items-center ">
        <button onClick={showCandidateMatches}>{showMatch ? "-" : "+"}</button>
        <p className=" m-2 rounded uppercase font-bold text-slate-800">
          {name}
        </p>
        <div className="w-full flex justify-end">
          <p className="text-sm ">{availability}</p>
        </div>
      </div>

      <div className="flex gap-8 flex-wrap w-[100%] text-sm">
        {showMatch && (
          <div className="w-[90%] bg-slate-50 rounded m-3">
            <p className="bg-white m-1 p-2">Contact: {email}</p>
            <div className=" m-1 p-2 flex-col w-full flex gap-3 rounded">
              {match && match.length > 0 && (
                <div className="flex items-center ">
                  <p>✅</p>
                  <div className="flex gap-2 p-2 bg-green-50">
                    {match.map((match) => (
                      <p className="bg-slate-200 rounded px-1">{match}</p>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-2 p-2 flex-wrap ">
                <p>❓</p>
                <div className="flex gap-2 p-2  flex-wrap">
                  {showMatch &&
                    extra.map((match) => (
                      <p className="bg-slate-200 rounded px-1">{match}</p>
                    ))}
                </div>
                <button className="bg-yellow-200 p-2 rounded">
                  {" "}
                  ADD to shortlist{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
