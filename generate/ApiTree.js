/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-06-03
*/

import merge from 'lodash.merge';

const fs = require('fs');
const jsonic = require('jsonic');
const rawIntegrationSnapshots = require('../test/__snapshots__/integration.test.js.snap');
const OUTPUT_PATH = '../ApiTree.json';

function SNAPtoJS(snap) {
	return jsonic(
		snap
			.replace(/Object {/g, '{')
			.replace(/Array \[/g, '[')
	);
}

export const integrationSnapshots = {};
Object.keys(rawIntegrationSnapshots).forEach(key => {
	const [k1, k2] = key.split(' ');
	merge(integrationSnapshots, {
		[k1]: {
			[k2]: SNAPtoJS(rawIntegrationSnapshots[key])
		}
	})
});

console.log("Generated API tree", integrationSnapshots);

fs.writeFile(OUTPUT_PATH, JSON.stringify(integrationSnapshots, undefined, 2), function (err) {
	if (err) throw err;
	console.log('Successfully save API tree to: ', OUTPUT_PATH);
});