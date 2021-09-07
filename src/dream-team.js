import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (members == null) return false
  let newArr = []
  for (let i = 0; i < members.length; i++) {
    console.log(typeof(members[i]))
      if (typeof(members[i]) == "string") {
        newArr.push(members[i].replace(/\s+/g, '').toUpperCase())
    }
  }

  newArr.sort()
  let nick = ""

  for (let i = 0; i < newArr.length; i++){
    nick += newArr[i][0]
  }

  return nick.toUpperCase()
}
