const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if ((date instanceof Date) === false || Object.getOwnPropertyNames(date).length != 0 )
    throw Error("Invalid date!");
  let result;
  let numberMonth = date.getMonth();
  if (numberMonth >= 2 && numberMonth <= 4) {
    result = 'spring';
  }
  else if (numberMonth >= 5 && numberMonth <= 7) {
    result = 'summer';
  }
  else if (numberMonth >= 8 && numberMonth <= 10) {
    result = 'autumn';
  }
  else if (numberMonth === 11 || numberMonth === 0 || numberMonth === 1) {
    result = 'winter';
  }
  return result;
}

module.exports = {
  getSeason
};
