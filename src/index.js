const { RESTDataSource } = require('apollo-datasource-rest/dist/index');

require('dotenv').config();
const path = require('path');

/**
 * The FinancialModelingPrep core module.
 */
class FinancialModelingPrepAPI extends RESTDataSource {
	constructor(config = {}) {
		super();
		this.initialize(config || {});

		this.baseURL = `https://financialmodelingprep.com/api/v3/`;

		const self = this;
		Object.keys(FinancialModelingPrepAPI.prototype).forEach(key => {
			if (self[key] instanceof Object) {
				Object.keys(self[key]).forEach(key2 => {
					self[key][key2] = self[key][key2].bind(self);
				})
			}
		})
	}

	static extend(extensionPath, alias = path.parse(extensionPath).name) {
		let extension = require(extensionPath);
		if (typeof extension === 'function') extension = extension(this);
		FinancialModelingPrepAPI.prototype[alias] = extension;
	}
}

// // Include all the submodules.
FinancialModelingPrepAPI.extend('./lib/companyValuation');
FinancialModelingPrepAPI.extend('./lib/stockTimeSeries');
FinancialModelingPrepAPI.extend('./lib/stockMarket');
FinancialModelingPrepAPI.extend('./lib/cryptocurrencies');
FinancialModelingPrepAPI.extend('./lib/forex');

export default FinancialModelingPrepAPI;