import React from "react";
import { OPTIONS } from "../../util/options";

export default function Input({ requiredSkills, setRequiredSkills }) {
  function eventHandler(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        if (!requiredSkills.includes(options[i].value)) {
          selectedValues.push(options[i].value);
        }
      }
    }
    setRequiredSkills([...requiredSkills, ...selectedValues]);
  }

  function handleDelete(e) {
    let newArray = [];
    // const index = requiredSkills.indexOf(e.target.value);

    for (let i of requiredSkills) {
      if (i !== e.target.value) newArray.push(i);
    }

    setRequiredSkills(newArray);
  }

  return (
    <form
      className=" bg-slate-700 rounded m-2 flex-1 p-2"
      onSubmit={eventHandler}
    >
      <label for="skills" className="text-white uppercase">
        Skills Required:{" "}
      </label>
      <select
        id="skills"
        className="w-40 rounded"
        value={requiredSkills}
        onChange={handleChange}
        default=""
      >{OPTIONS.map((option)=>{return (<option value={option}>{option}</option>)})}
       
      </select>
      {requiredSkills &&
        requiredSkills.map((skill) => (
          <input
            type="button"
            className="button"
            value={skill}
            onClick={handleDelete}
          ></input>
        ))}
    </form>
  );
}
