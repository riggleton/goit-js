import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((skillList, user) => {
      skillList.push(...user.skills);
      return skillList;
    }, [])
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem',
// 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
