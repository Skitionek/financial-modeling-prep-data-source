/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-05-24
*/

import crypto from './crypto';
import data from './data';
import forex from './forex';
import performance from './performance';
import technical from './technical';

export default {
	...crypto,
	...data,
	...forex,
	...performance,
	...technical
}