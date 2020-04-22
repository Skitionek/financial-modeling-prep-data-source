/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  2019-06-17
*/

/**
 * Util function to get the stock data.
 *
 * @param {String} fn
 *   The enum fn available for stock interests.
 *
 * @returns {Function}
 *   A stock data function to accept user data that returns a promise.
 *   {
 *	    [Ticker]: {
 *	        Ticker: String,
 *	        Price: String,
 *	        Changes: Float,
 *	        ChangesPerc: String,
 *	        companyName: String
 *	    },
 *	    ...
 *	 }
 *     or
 *     [
 *        {
 *	        Ticker: String,
 *          Price: Float,
 *          companyName: String
 *      },
 *      ...
 *   ]
 */
import { universalAccessor } from "./util";

module.exports = {
	majorsIndexes: universalAccessor('majors-indexes'),
	actives: universalAccessor('actives','mostActiveStock'),
	gainers: universalAccessor('gainers','mostGainerStock'),
	losers: universalAccessor('losers','mostLoserStock'),
	NYSETradingHours: universalAccessor('is-the-market-open'),
	sectors_performance: universalAccessor('sectors-performance','sectorPerformance')
};
