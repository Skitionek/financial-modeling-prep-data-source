
import AlphaVantageAPI from "../../src/mocks/alphaVantageAPI";
import { matchesSnapshot } from "../utils";

jest.setTimeout(30000);

let alpha;
beforeAll(() => {
	alpha = new AlphaVantageAPI();
});

test(`sector performance data works`, () =>
	alpha.performance.sector()
		.then(matchesSnapshot)
);
