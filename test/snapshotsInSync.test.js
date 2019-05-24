/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

import { obtainStructure } from "./jest.extensions";
import merge from 'lodash.merge';
const jsonic = require('jsonic');

function SNAPtoJS(snap) {
	const par =
		snap
			.replace(/Object {/g, '{')
			.replace(/Array \[/g, '[');
	console.log(par);
	return jsonic(
		snap
			.replace(/Object {/g, '{')
			.replace(/Array \[/g, '[')
	);
}

const tmp = require('./__snapshots__/integration.test.js.snap');
const integrationSnapshots = {};
Object.keys(tmp).forEach(key => {
	const [k1, k2] = key.split(' ');
	merge(integrationSnapshots, {
		[k1]: {
			[k2]: SNAPtoJS(tmp[key])
		}
	})
});

describe.each(Object.keys(integrationSnapshots))("%s", groupKey => {
	const integrationSnapshot = integrationSnapshots[groupKey];
	const unitSnapshot = {};
	const tmp = require('./unit/__snapshots__/' + groupKey + '.unit.test.js.snap');
	Object.keys(tmp).forEach(key => {
		const [k1] = key.split(' ');
		merge(unitSnapshot, {
			[k1]: SNAPtoJS(tmp[key])
		})
	});
	it('contains same groups', ()=>expect(Object.keys(unitSnapshot)).toEqual(Object.keys(integrationSnapshot)));
	Object.keys(integrationSnapshot).forEach(key => {
		it(key, () => {
			expect(obtainStructure(unitSnapshot[key])).toEqual(integrationSnapshot[key]);
		});
	})
});

