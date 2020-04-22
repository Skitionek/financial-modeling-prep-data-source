/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  22/04/2020
*/
const intervals = new Set(
	'1min', '5min', '15min', '30min', '1hour'
);
module.exports = ({ interval, currency_pair }) => {
	if (intervals.has(interval)) {
		return {
			path: `${interval}/${currency_pair}`
		}
	} else {
		throw ReferenceError(`${interval} is not valid, please select one of the following ${intervals}`)
	}
};