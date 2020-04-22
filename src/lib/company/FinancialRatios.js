module.exports = config => {
	const util = require('../util')(config);

	return {
		financial_ratios: ({symbol}) => util.fn(['financial-ratios', symbol], d => util.tryAccess(d, 'ratios'))()
	};
};