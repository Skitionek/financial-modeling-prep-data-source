'use strict';

import AlphaVantageMock from "../mocks/alphaVantageMock";
import { matchesSnapshot } from "../jest.extensions";

let alpha;
beforeAll(() => {
	alpha = new AlphaVantageMock();
});

test(`intraday data works`, () => {
	return alpha.data.intraday(`msft`)
		.then(matchesSnapshot);
});

test(`daily data works`, () => {
	return alpha.data.daily(`msft`)
		.then(matchesSnapshot);
});

test(`daily_adjusted data works`, () => {
	return alpha.data.daily_adjusted(`msft`)
		.then(matchesSnapshot);
});

test(`exchangeTimeSeries data works`, () => {
	return alpha.data.exchangeTimeSeries({
		symbol: `msft`,
		interval: '5min'
	})
		.then(matchesSnapshot);
});

test(`exchangeTimeSeries_adjusted data works`, () => {
	return alpha.data.exchangeTimeSeries_adjusted({
		symbol: `msft`,
		interval: 'daily'
	})
		.then(matchesSnapshot);
});

test(`weekly data works`, () => {
	return alpha.data.weekly(`msft`)
		.then(matchesSnapshot);
});

test(`weekly_adjusted data works`, () => {
	return alpha.data.weekly_adjusted(`msft`)
		.then(matchesSnapshot);
});

test(`monthly data works`, () => {
	return alpha.data.monthly(`msft`)
		.then(matchesSnapshot);
});

test(`monthly_adjusted data works`, () => {
	return alpha.data.monthly_adjusted(`msft`)
		.then(matchesSnapshot);
});

test(`weekly_adjusted data works`, () => {
	return alpha.data.monthly_adjusted(`msft`)
		.then(matchesSnapshot);
});

test(`quote quote data works`, () => {
	return alpha.data.quote(`msft`)
		.then(matchesSnapshot);
});

test(`search search works`, () => {
	return alpha.data.search(`Advanced Micro`)
		.then(matchesSnapshot);
});