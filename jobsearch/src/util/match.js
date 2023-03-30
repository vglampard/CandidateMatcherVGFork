// WE HAVE:

// Array of candidates
// Array of skills

// AWS, React, SQL

// for loop, which for each candidate:

//     declare empty skillsMatch array
//     declare empty skillsNotMatch array

//      through each skill in skills.
//      FOR each skill, see if there's a match in required skills.
//         if there ISNT, push that skill to NO MATCH
//         if there IS, push that skill to match

//     ad those arrays to the candidate object:
//     skillMatch: react, aws,
//     skillNotMatch: tS, D3, Golang.

// WE WANT: array of candidates with their match suitability tso we can display

export function candidateMatch(candidates, requiredSkills) {
    let candidatesAssessed = [];
    console.log(requiredSkills, "Skills");
    console.log(candidates, "candidates");
  
    if (candidates && candidates.length) {
      for (let i = 0; i < candidates.length; i++) {
        candidatesAssessed.push(areTheySuitable(candidates[i], requiredSkills));
      }
    }
    // console.log("candidatesAssessed", candidatesAssessed);
    return candidatesAssessed;
  }
  
  export function areTheySuitable(candidate, requiredSkills) {
    // console.log(requiredSkills, "Skills");
    // console.log(candidate, "candidates");
    // add 2 extra properties to the candidate object: matchSkill, notMatchSkills
    // this will allow us to see how suitable they are
    let skillsMatch = [];
  
    if (requiredSkills && requiredSkills.length) {
      for (let i = 0; i < requiredSkills.length; i++) {
        if (candidate.skills.includes(requiredSkills[i])) {
          skillsMatch.push(requiredSkills[i]);
          // console.log(skillsMatch, "skillsMatch");
        }
      }
    }
    candidate["match"] = skillsMatch;
    console.log("candidateFiltered", candidate);
    return candidate;
  }