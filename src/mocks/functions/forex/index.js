/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-05-24
*/

import { importFunctions } from "../util";

const PREFIX = 'FX_';

export default {
	...importFunctions(__dirname,PREFIX),
	CURRENCY_EXCHANGE_RATE: require('./exchangeRates.generated.json')
}