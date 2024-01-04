/** Math function subtract contain two argument, it should be number, returns subtract of two number
 * @param {number} value1 some number e.g 12
 * @param {number} value2 some number e.g 15
 * @type {number}
 * @returns subtract of two number
 */
export const Subtract = (value1: string | number, value2: string | number) =>
  parseFloat(value1.toString()) - parseFloat(value2.toString());
