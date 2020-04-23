/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

/* global performance*/

import FinancialModelingPrepAPI from "../src";
import * as variables from "./variable_sets";

jest.setTimeout(30000);

describe.each(Object.keys(variables))("%s", key => {
	let varSets = variables[key];
	varSets = Array.isArray(varSets) ? varSets : [varSets];
	it.each(varSets)("%j", async ({ arg, ...varSet }) => {
		const fmpAPI = new FinancialModelingPrepAPI();
		const start = performance.now();
		await fmpAPI[key](arg, varSet);
		const response1time = performance.now();
		await fmpAPI[key](arg, varSet);
		const response2time = performance.now();
		console.log(response1time - start + 1, '>', response2time - response1time);
		expect(response1time - start + 1).toBeGreaterThan(response2time - response1time)
	});
});
