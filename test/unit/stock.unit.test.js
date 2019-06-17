import FinancialModelingPrepAPI from "../../src/mocks/financialModelingPrepAPI";
import { matchesSnapshot } from "../utils";

jest.setTimeout(30000);

let fmp;
beforeAll(() => {
	fmp = new FinancialModelingPrepAPI();
});

test(`actives data works`, () => {
	return fmp.stock.actives()
		.then(matchesSnapshot);
});

test(`gainers data works`, () => {
	return fmp.stock.gainers()
		.then(matchesSnapshot);
});

test(`losers data works`, () => {
	return fmp.stock.losers()
		.then(matchesSnapshot);
});

test(`all data works`, () => {
	return fmp.stock.all()
		.then(matchesSnapshot);
});