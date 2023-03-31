export function candidateMatch(candidates, requiredSkills, setCandidates) {
  let candidatesAssessed = [];

  for (let i = 0; i < candidates.length; i++) {
    candidatesAssessed.push(areTheySuitable(candidates[i], requiredSkills));
  }

  setCandidates(candidatesAssessed);
}

export function areTheySuitable(candidate, requiredSkills) {
  let skillsMatch = [];
  let skillsNotMatch = [];

  for (let i = 0; i < candidate.skills.length; i++) {
    requiredSkills.includes(candidate.skills[i])
      ? skillsMatch.push(candidate.skills[i])
      : skillsNotMatch.push(candidate.skills[i]);
  }

  candidate["match"] = skillsMatch;
  candidate["extra"] = skillsNotMatch;
  return candidate;
}
