/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-05-24
*/

import financialModelingPrepAPI from "../index";
import functions from "./functions";

export default class financialModelingPrepAPIMock extends financialModelingPrepAPI {
	constructor() {
		super({key:'demo'});
	}
	async get(url) {
		const func = url
			.toString()
			.split('?')[1]
			.toString()
			.split('&')
			.reduce(d => {
				const [k, v] = d.split('=')
				return k === 'function' ? v : d;
			});
		return functions[func];
	}
}