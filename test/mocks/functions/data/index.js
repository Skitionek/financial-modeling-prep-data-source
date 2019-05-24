/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-05-24
*/

import { importFunctions } from "../util";

const PREFIX = 'TIME_SERIES_';

export default {
	...importFunctions(__dirname,PREFIX),
	GLOBAL_QUOTE: require('./quote.generated.json'),
	SYMBOL_SEARCH: require('./search.generated.json'),
}