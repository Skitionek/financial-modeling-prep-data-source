/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

/*global performance*/

import AlphaVantageAPI from "index";
import * as variables from "./mocks/variableMocks";

jest.setTimeout(30000);

const alphaStructure = AlphaVantageAPI.prototype;

describe.each(['data', 'crypto', 'forex', 'performance', 'technical'])("%s", groupKey => {
	describe.each(Object.keys(alphaStructure[groupKey]))("%s", key => {
		let varSets = variables[groupKey][key];
		varSets = Array.isArray(varSets) ? varSets : [varSets];
		it.each(varSets)("%j", async varSet => {
			const alpha = new AlphaVantageAPI({ key: 'demo' });
			const start = performance.now();
			const r1 = await alpha[groupKey][key](varSet);
			const response1time = performance.now();
			const r2 = await alpha[groupKey][key](varSet);
			const response2time = performance.now();
			console.log(r1,r2);
			console.log(response1time - start + 1,'>',response2time - response1time);
			expect(response1time - start + 1).toBeGreaterThan(response2time - response1time)
		});
	})
});

