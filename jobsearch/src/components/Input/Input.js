import React, { useState } from "react";

export default function Input({ requiredSkills, setRequiredSkills }) {
  function eventHandler(e) {
    e.preventDefault();
    console.log("requiredSkills", requiredSkills);
  }

  function handleChange(e) {
    console.log(e.target.options);
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
    const index = requiredSkills.indexOf(e.target.value);

    for (let i of requiredSkills) {
      console.log("i: ", i);
      if (i !== e.target.value) newArray.push(i);
    }

    setRequiredSkills(newArray);
  }

  return (
    <form className="w-1/3 bg-green-100 m-2 flex-1" onSubmit={eventHandler}>
      <label for="skills">Choose a skill:</label>
      <select
        id="skills"
        className="w-30"
        value={requiredSkills}
        onChange={handleChange}
        default=""
      >
        <option value=""></option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
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
