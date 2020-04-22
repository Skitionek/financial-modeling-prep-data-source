module.exports = config => {
	const util = require('./util')(config);

	return {
		key_metrics: ({ symbol, period }) => util.fn(['company-key-metrics', symbol])({ period })
	}
};
