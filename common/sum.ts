/** Math function subtract contain two argument, it should be number, returns sum of two number
 * @param {number} value1 some number e.g 12
 * @param {number} value2 some number e.g 15
 * @type {number}
 * @returns sum of two number
 */
export const Sum = (value1: string | number, value2: string | number) =>
  parseFloat(value1.toString()) + parseFloat(value2.toString());
