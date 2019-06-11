const series = fn => function ({ from_symbol, to_symbol, interval, outputsize }) {
	return this.util.fn(
		fn,
		'time_series',
		'data',
		'meta_data'
	).call(this, { from_symbol, to_symbol, interval, outputsize })
};

module.exports = AlphaVantageAPI => ({
	exchangeRates: AlphaVantageAPI.prototype.crypto.exchangeRates,
	intraday: series('FX_INTRADAY'),
	daily: series('FX_DAILY'),
	weekly: series('FX_WEEKLY'),
	monthly: series('FX_MONTHLY'),

	exchangeTimeSeries({ from_symbol, to_symbol, interval, outputsize }) {
		if (interval.match(/\d+min/)) return this.forex.intraday({ from_symbol, to_symbol, interval, outputsize });
		return this.forex[interval.toLowerCase()]({ from_symbol, to_symbol, outputsize });
	}
});
