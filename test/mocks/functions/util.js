/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-05-24
*/

const fs = require('fs');
const path = require('path');

export function importFunctions(absolute_path, PREFIX) {
	const generated = {};
	const handcrafted = {};
	fs.readdirSync(absolute_path).forEach(file => {
		const [name,ext, ext2] = file.split('.');
		if (ext==='generated') {
			generated[PREFIX + name.toUpperCase()] = require(path.join(absolute_path, file));
		} else if (ext==='json') {
			handcrafted[PREFIX + name.toUpperCase()] = require(path.join(absolute_path, file));
		}
	});
	return {
		...generated,
		...handcrafted
	}
}