import FinancialModelingPrepAPI from "../../src/mocks/financialModelingPrepAPI";
import { matchesSnapshot } from "../utils";

jest.setTimeout(30000);

let fmp;
beforeAll(() => {
	fmp = new FinancialModelingPrepAPI();
});

describe('profile', () => {
	it(`profile data works`, () => {
		return fmp.companyValuation.profile({symbol:`AAPL`})
			.then(matchesSnapshot);
	});
	it(`profile data works`, () => {
		return fmp.companyValuation.profile({symbol:'AAPL', period: 'quarter'})
			.then(matchesSnapshot);
	});
});