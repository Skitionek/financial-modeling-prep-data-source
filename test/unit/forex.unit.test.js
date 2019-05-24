'use strict';

import AlphaVantageMock from "../mocks/alphaVantageMock";
import { matchesSnapshot } from "../jest.extensions";

let alpha;
beforeAll(() => {
	alpha = new AlphaVantageMock();
});

it(`daily data works`, () => {
	return alpha.forex.daily('btc', 'usd')
		.then(matchesSnapshot);
});

it(`exchangeRates data works`, () => {
	return alpha.forex.exchangeRates('btc', 'usd')
		.then(matchesSnapshot);
});

describe(`exchangeTimeSeries data works`, () => {
	it('5min', () =>
		alpha.forex.exchangeTimeSeries({
			from_symbol:'btc',
			to_symbol: 'usd',
			interval: '5min'
		})
			.then(matchesSnapshot)
	);
});

it(`intraday data works`, () => {
	return alpha.forex.intraday('btc', 'usd')
		.then(matchesSnapshot);
});

it(`monthly data works`, () => {
	return alpha.forex.monthly('btc', 'usd')
		.then(matchesSnapshot);
});

it(`weekly data works`, () => {
	return alpha.forex.weekly('btc', 'usd')
		.then(matchesSnapshot);
});