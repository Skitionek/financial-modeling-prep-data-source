module.exports = config => {
	const util = require('./util')(config);

	return {
		enterprise_value: ({ symbol, period }) => util.fn(['enterprise-value', symbol])({ period })
	}
};
