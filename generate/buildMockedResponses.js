/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-06-12
*/

import functions from "../src/mocks/functions";
const fs = require('fs');
const OUTPUT_PATH = 'mocks/functions.json';

console.log("Saving generated functionMocks: ", Object.keys(functions));

fs.writeFile(OUTPUT_PATH, JSON.stringify(functions, undefined, 2), function (err) {
	if (err) throw err;
	console.log('Successfully build functionMocks', OUTPUT_PATH);
});