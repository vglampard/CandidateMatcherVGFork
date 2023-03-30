import React from "react";
export default function Candidate({ name, email, skills, availability }) {
  return (
    <div className=" flex gap-3 m-2 rounded bg-slate-200 p-2 drop-shadow">
      <div><p className="bg-slate-600 rounded text-slate-200">Name: {name}</p></div>
      <div> <p>Contact: {email}</p></div>
      <div className="flex gap-2 text-sm">
        <p>Skills: </p>
        {skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <div><p>Availability: {availability}</p></div>
    </div>
  );
}
