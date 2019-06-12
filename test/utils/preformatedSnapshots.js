/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-06-03
*/

import merge from 'lodash.merge';
const jsonic = require('jsonic');

function SNAPtoJS(snap) {
	return jsonic(
		snap
			.replace(/Object {/g, '{')
			.replace(/Array \[/g, '[')
	);
}

const tmp = require('../__snapshots__/integration.test.js.snap');
export const integrationSnapshots = {};
Object.keys(tmp).forEach(key => {
	const [k1, k2] = key.split(' ');
	merge(integrationSnapshots, {
		[k1]: {
			[k2]: SNAPtoJS(tmp[key])
		}
	})
});

export const unitSnapshots = {};
Object.keys(integrationSnapshots).forEach( groupKey => {
	const unitSnapshot = {};
	const tmp_unitSnapshot = require(`../unit/__snapshots__/${  groupKey  }.unit.test.js.snap`);
	Object.keys(tmp_unitSnapshot).forEach(key => {
		const [k1] = key.split(' ');
		merge(unitSnapshot, {
			[k1]: SNAPtoJS(tmp_unitSnapshot[key])
		})
	});
	unitSnapshots[groupKey] = unitSnapshot;
});