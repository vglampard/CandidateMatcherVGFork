import { useState } from "react";
export default function Candidate({ candidate }) {
  const { email, skills, name, match, extra, availability } = candidate;
  const [showMatch, setShowMatch] = useState(false);

  function showCandidateMatches() {
    setShowMatch(!showMatch);
  }
  return (
    <div
      className={`flex gap-3 m-2 rounded bg-slate-200 p-2 drop-shadow ${
        match && match.length > 0 ? "bg-green-300" : "bg-red-100"
      }`}
    >
      <div>
        <p className="bg-slate-600 rounded text-slate-200">Name: {name}</p>
      </div>
      <div>
        {" "}
        <p>Contact: {email}</p>
      </div>
      <div className="flex gap-2 text-sm">
        {/* <p>Skills: </p>
        {skills.map((skill) => (
          <p>{skill}</p>
        ))} */}
        {match && match.length > 0 && (
          <div>
            {" "}
            <p>MATCHES:</p>
            <button onClick={showCandidateMatches}>+</button>{showMatch &&  match.map((match) => (
              <p>{match}</p>
            ))}
           
          </div>
        )}
        <p></p>
      </div>
      <div>
        <p>Availability: {availability}</p>
      </div>
    </div>
  );
}
