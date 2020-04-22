/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

import FinancialModelingPrepAPI from "../src";
import * as variables from "../src/mocks/demoVariableSets";
import { obtainStructure } from "./utils";

jest.setTimeout(30000);

let fmpAPI;
beforeAll(() => {
	fmpAPI = new FinancialModelingPrepAPI()
});

describe.each(Object.keys(variables))("%s", key => {
	let varSets = variables[key];
	varSets = Array.isArray(varSets) ? varSets : [varSets];
	it.each(varSets)("%j", async ({arg, ...varSet}) => {
		expect.assertions(2);
		const response = await fmpAPI[key](arg,varSet);
		const structure = obtainStructure(response);
		expect(structure).toMatchSnapshot();
		expect(JSON.stringify(response).length).toBeGreaterThan(20);
	});
});

