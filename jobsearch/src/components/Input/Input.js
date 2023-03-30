import React from "react";

export default function Input({ requiredSkills, setRequiredSkills }) {
  function eventHandler(e) {
    setRequiredSkills([...requiredSkills, e.target.value]);
  }
  return (
    <form className="w-1/3 bg-green-100 m-2 flex-1">
      <label for="skills">Choose a skill:</label>
      <select id="skills" className="w-30">
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
      </select>

      <input
        type="submit"
        onSubmit={(e) => {
          eventHandler(e);
        }}
      />
    </form>
  );
}
