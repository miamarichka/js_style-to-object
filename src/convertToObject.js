'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  sourceString
    .split(';')
    .filter(style => style.trim())
    .forEach(keyVsValue => {
      const [key, value] = keyVsValue.split(':');

      obj[key.trim()] = value.trim();
    });

  return obj;
}

module.exports = convertToObject;
