/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

/*global performance*/

import AlphaVantageAPI from "../src";
import * as variables from "./mocks/variableMocks";

const alphaStructure = AlphaVantageAPI.prototype;

describe.each(['data', 'crypto', 'forex', 'performance', 'technical'])("%s", groupKey => {
	describe.each(Object.keys(alphaStructure[groupKey]))("%s", key => {
		let varSets = variables[groupKey][key];
		varSets = Array.isArray(varSets) ? varSets : [varSets];
		it.each(varSets)("%j", async varSet => {
			const alpha = new AlphaVantageAPI({ key: 'demo' });
			const start = performance.now();
			await alpha[groupKey][key](varSet);
			const response1time = performance.now();
			await alpha[groupKey][key](varSet);
			const response2time = performance.now();
			console.log((response2time - response1time), '<', (response1time - start));
			expect(2 * (response1time - start)).toBeGreaterThan(response2time - response1time)
		});
	})
});

