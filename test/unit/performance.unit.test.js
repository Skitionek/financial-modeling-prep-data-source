
import AlphaVantageMock from "../mocks/alphaVantageMock";
import { matchesSnapshot } from "../jest.extensions";

jest.setTimeout(30000);

let alpha;
beforeAll(() => {
	alpha = new AlphaVantageMock();
});

test(`sector performance data works`, () =>
	alpha.performance.sector()
		.then(matchesSnapshot)
);
