/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-04-26
*/

export const FIELD_TYPES = {
	TIMESTAMP: null,
	STRING: null,
	FLOAT: null,
	DATE: null,
	INTERVAL: null
};

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
	if (typeof obj === 'string') return FIELD_TYPES.STRING;
	if (typeof obj === 'number') {
		return FIELD_TYPES.FLOAT;
	}
	return null;
}

export const matchesSnapshot = data => expect(obtainStructure(data)).toMatchSnapshot();