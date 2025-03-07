import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) return "Unable to determine the time of year!"

  try {
    date.toTimeString()
  } catch (err) {
    throw new Error("Invalid date!")
  }

  let d = date.getMonth() + 1

  return d < 3 ? "winter" : d < 6 ? "spring" : d < 9 ? "summer" : d < 12 ? "fall" : "winter"
}
