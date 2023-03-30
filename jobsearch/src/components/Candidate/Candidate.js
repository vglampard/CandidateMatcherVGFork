import React from 'react'

export default function Candidate({name, email, skills, availability}) {
  return (
    <div className=" flex gap-3 bg-green-100 m-2" >
        <p>Name: {name}</p>
        <p>Contact: {email}</p>
        <div className="flex gap-2 text-sm"><p>Skills: </p>{skills.map((skill)=> <p>{skill}</p>)}</div>
        <p>Availability: {availability}</p>
    </div>
  )
}
