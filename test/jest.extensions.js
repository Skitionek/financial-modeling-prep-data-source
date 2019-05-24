/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-04-26
*/

export function obtainStructure(obj) {
	if (Array.isArray(obj)) {
		return [obtainStructure(obj[0])]
	}
	if (typeof obj === 'object' && obj !== null) {
		const result = {};
		Object.entries(obj).forEach(([k,v])=> {
			result[k] = obtainStructure(v);
		});
		return result
	}
	return null
}

export const matchesSnapshot = data => expect(obtainStructure(data)).toMatchSnapshot();