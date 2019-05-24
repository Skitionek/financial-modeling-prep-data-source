/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-05-24
*//* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

import AlphaVantageAPI from "../../../src";
import * as variables from "../variableMocks";
import { obtainStructure } from "../../jest.extensions";

const fs = require('fs');
const path = require('path');

let alpha;
beforeAll(() => {
	alpha = new AlphaVantageAPI({ key: 'demo' });
	alpha.getRaw = true;
});

function limitArrays(obj) {
	if (Array.isArray(obj)) {
		return [limitArrays(obj[0])]
	} else if (obj instanceof Object) {
		const r = {};
		let entries = Object.entries(obj);
		const [k, v] = entries[0];
		if (k.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/))
			entries = [entries[0]];
		entries
			.forEach(([k, v]) => {
				r[k] = limitArrays(v)
			});
		return r;
	}
	return obj;
}

const alphaStructure = AlphaVantageAPI.prototype;

describe.each(['data', 'crypto', 'forex', 'performance', 'technical'])("%s", groupKey => {
	it.each(Object.keys(alphaStructure[groupKey]))("%s", async (key, done) => {
		let varSet = variables[groupKey][key];
		varSet = Array.isArray(varSet) ? varSet[0] : varSet;
		const response = await alpha[groupKey][key](varSet);
		const structure = obtainStructure(limitArrays(response));

		const json = JSON.stringify(structure,undefined,2);
		const relative_path = `./${groupKey}/${key}.generated.json`;
		fs.writeFile(path.join(__dirname, relative_path), json, function (err) {
			if (err) throw err;
			done();
		});
	})
});

