
import FinancialModelingPrepAPI from "../../src/mocks/financialModelingPrepAPI";
import { matchesSnapshot } from "../utils";

jest.setTimeout(30000);

let alpha;
beforeAll(() => {
	alpha = new FinancialModelingPrepAPI();
});

it(`daily data works`, () => {
	return alpha.crypto.daily('btc', 'usd')
		.then(matchesSnapshot);
});

it(`exchangeRates data works`, () => {
	return alpha.crypto.exchangeRates('btc', 'usd')
		.then(matchesSnapshot);
});

it(`exchangeTimeSeries data works`, () => {
	return alpha.crypto.exchangeTimeSeries({
		from_symbol: 'btc',
		to_symbol: 'usd',
		interval: 'daily'
	})
		.then(matchesSnapshot);
});

it(`weekly data works`, () => {
	return alpha.crypto.weekly('btc', 'usd')
		.then(matchesSnapshot);
});

it(`monthly data works`, () => {
	return alpha.crypto.monthly('btc', 'usd')
		.then(matchesSnapshot);
});
