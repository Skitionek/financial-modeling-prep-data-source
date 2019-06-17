
import FinancialModelingPrepAPI from "../../src/mocks/financialModelingPrepAPI";
import { matchesSnapshot } from "../utils";

jest.setTimeout(30000);

let alpha;
beforeAll(() => {
	alpha = new FinancialModelingPrepAPI();
});

test(`sector performance data works`, () =>
	alpha.performance.sector()
		.then(matchesSnapshot)
);
