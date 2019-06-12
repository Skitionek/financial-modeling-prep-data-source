/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-04-26
*/

export const FIELD_TYPES = {
	TIMESTAMP: "Timestamp",
	STRING: "String",
	FLOAT: "Float",
	DATE: "Date",
	INTERVAL: "Interval"
};
export const INTERVALS = [
	'1min', '5min', '15min', '30min', '60min', 'daily', 'weekly', 'monthly'
];

function stringToStructure(obj) {
	if (obj.match(/\d{4}-\d{2}-\d{2}/)) {
		if (obj.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/)) {
			return FIELD_TYPES.TIMESTAMP
		}
		return FIELD_TYPES.DATE
	}
	if (!isNaN(obj)) {
		return FIELD_TYPES.FLOAT
	}
	if (INTERVALS.indexOf(obj) !== -1) {
		return FIELD_TYPES.INTERVAL
	}
	if (obj === '-') return obj;
	return Object.values(FIELD_TYPES).indexOf(obj) === -1 ? FIELD_TYPES.STRING : obj;
}

export function obtainStructure(obj) {
	if (Array.isArray(obj)) {
		return [obtainStructure(obj[0])]
	}
	if (typeof obj === 'object' && obj !== null) {
		const result = {};
		Object.entries(obj).forEach(([k, v]) => {
			result[k] = obtainStructure(v);
		});
		return result
	}
	if (typeof obj === 'string') return stringToStructure(obj);
	if (typeof obj === 'number') {
		return FIELD_TYPES.FLOAT;
	}
	return null;
}

export const matchesSnapshot = data => expect(obtainStructure(data)).toMatchSnapshot();