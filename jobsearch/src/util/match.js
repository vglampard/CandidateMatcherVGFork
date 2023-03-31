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

export function candidateMatch(candidates, requiredSkills, setCandidates) {
    let candidatesAssessed = [];

      for (let i = 0; i < candidates.length; i++) {
        candidatesAssessed.push(areTheySuitable(candidates[i], requiredSkills));
      }
      
    setCandidates(candidatesAssessed)
  }
  
  export function areTheySuitable(candidate, requiredSkills) {

    let skillsMatch = [];
  let skillsNotMatch = []

      for (let i = 0; i < candidate.skills.length; i++) {
        requiredSkills.includes(candidate.skills[i]) ? 
          skillsMatch.push(candidate.skills[i]): skillsNotMatch.push(candidate.skills[i])
      }
    
    candidate["match"] = skillsMatch;
    candidate["extra"] = skillsNotMatch
    return candidate;
  }