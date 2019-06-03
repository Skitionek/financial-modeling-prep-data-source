/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

import { obtainStructure } from "./jest.extensions";
import { integrationSnapshots, unitSnapshots } from "./dataStructure";

describe.each(Object.keys(integrationSnapshots))("%s", groupKey => {
	const integrationSnapshot = integrationSnapshots[groupKey];
	const unitSnapshot = unitSnapshots[groupKey];
	it('contains same groups', ()=>
		expect(Object.keys(unitSnapshot))
			.toEqual(Object.keys(integrationSnapshot)));
	Object.keys(integrationSnapshot).forEach(key => {
		it(key, () => {
			expect(obtainStructure(unitSnapshot[key])).toEqual(integrationSnapshot[key]);
		});
	})
});

