/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-05-24
*//* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

import FinancialModelingPrepAPI from "../src";
import * as variables from "../src/mocks/demoVariableSets";
import { FIELD_TYPES, INTERVALS, obtainStructure } from "../test/utils";
import { timeFormat } from 'd3-time-format';

const fs = require('fs');

const alpha = new FinancialModelingPrepAPI({ key: 'demo' });
alpha.getRaw = true;

function limitArrays(obj) {
	if (Array.isArray(obj)) {
		return [limitArrays(obj[0])]
	} else if (obj instanceof Object) {
		const r = {};
		let entries = Object.entries(obj);
		const [k] = entries[0];
		if (k.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/))
			entries = [entries[0]];
		entries
			.forEach(([ki, v]) => {
				r[ki] = limitArrays(v)
			});
		return r;
	}
	return obj;
}

const alphaStructure = FinancialModelingPrepAPI.prototype;

const formatDate = timeFormat("%Y-%m-%d");
const formatDateTime = timeFormat("%Y-%m-%d %H:%M:%S");

function mockStructureData(obj) {
	if (Array.isArray(obj)) {
		return [mockStructureData(obj[0])]
	}
	if (typeof obj === 'object' && obj !== null) {
		const result = {};
		Object.entries(obj).forEach(([k, v]) => {
			result[k] = mockStructureData(v);
		});
		return result
	}
	if (typeof obj === 'string') {
		switch (obj) {
		case FIELD_TYPES.TIMESTAMP:
			return formatDateTime(Date.now());
		case FIELD_TYPES.DATE:
			return formatDate(Date.now());
		case FIELD_TYPES.FLOAT:
			return Math.random();
		case FIELD_TYPES.INTERVAL:
			return INTERVALS[Math.floor(Math.random() * INTERVALS.length)];
		case FIELD_TYPES.STRING:
		default:
			return obj
		}
	}
	return null
}

['data', 'crypto', 'forex', 'performance', 'technical'].forEach(groupKey => {
	console.group(groupKey);
	Object.keys(alphaStructure[groupKey]).forEach(async (key, done) => {
		let varSet = variables[groupKey][key];
		varSet = Array.isArray(varSet) ? varSet[0] : varSet;
		const response = await alpha[groupKey][key](varSet);
		console.group(key);
		const structure = mockStructureData(obtainStructure(limitArrays(response)));

		const json = JSON.stringify(structure, undefined, 2);
		const path = `src/mocks/functions/${groupKey}/${key}.generated.json`;
		fs.writeFile(path, json, function (err) {
			if (err) throw err;
			console.log("Saved to file: ",path);
		});
		console.groupEnd();
	});
	console.groupEnd();
});

