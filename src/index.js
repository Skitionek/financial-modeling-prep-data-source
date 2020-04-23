/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  22/04/2020
*/

const { RESTDataSource } = require("apollo-datasource-rest");

/**
 * The FinancialModelingPrep core module.
 */
class FinancialModelingPrepAPI extends RESTDataSource {
	constructor(config) {
		super();
		this.baseURL = `https://financialmodelingprep.com/api/v3/`;
		this.parse = this.parse.bind(this);
		this.initialize(config || {});
	}

	async gep(...url) {
		return this.get(...url).then(this.parse)
	}

	parse(data) {
		if (typeof data === 'string' || data instanceof String) {
			const number_cast = Number(data);
			return Number.isNaN(number_cast) ? data : number_cast
		}
		if (Array.isArray(data)) {
			return data.map(this.parse)
		}
		if (typeof data === 'object' && data !== null) {
			const mapped_data = {};
			for (const d in data) {
				if (data.hasOwnProperty(d)) {
					mapped_data[d] = this.parse(data[d])
				}
			}
			return mapped_data
		}
		return data
	}

	async company_profile(symbol) {
		return this.gep(`company/profile/${symbol}`)
	}

	async quote(id) {
		if (Array.isArray(id)) {
			id = id.join(',')
		}
		return this.gep(`quote/${id}`)
	}

	async search(query, searchParams) {
		return this.gep(`search`, { query, ...searchParams })
	}

	async financials_income_statement(symbol, searchParams) {
		if (Array.isArray(symbol)) {
			symbol = symbol.join(',')
		}
		return this.gep(`financials/income-statement/${symbol}`, searchParams)
	}

	async financials_balance_sheet_statement(symbol, searchParams) {
		return this.gep(`financials/balance-sheet-statement/${symbol}`, searchParams)
	}

	async financials_cash_flow_statement(symbol, searchParams) {
		return this.gep(`financials/cash-flow-statement/${symbol}`, searchParams)
	}

	async financial_ratios(symbol) {
		return this.gep(`financial-ratios/${symbol}`)
	}

	async enterprise_value(symbol, searchParams) {
		return this.gep(`enterprise-value/${symbol}`, searchParams)
	}

	async company_key_metrics(symbol, searchParams) {
		if (Array.isArray(symbol)) {
			symbol = symbol.join(',')
		}
		return this.gep(`company-key-metrics/${symbol}`, searchParams)
	}

	async financial_statement_growth(symbol, searchParams) {
		return this.gep(`financial-statement-growth/${symbol}`, searchParams)
	}

	async company_rating(symbol) {
		return this.gep(`company/rating/${symbol}`)
	}

	async company_discounted_cash_flow(symbol) {
		return this.gep(`company/discounted-cash-flow/${symbol}`)
	}

	async company_historical_discounted_cash_flow(symbol, searchParams) {
		return this.gep(`company/historical-discounted-cash-flow/${symbol}`, searchParams)
	}

	async company_stock_list() {
		return this.gep(`company/stock/list`)
	}

	async stock_real_time_price(symbol = '') {
		if (Array.isArray(symbol)) {
			symbol = symbol.join(',')
		}
		return this.gep(`stock/real-time-price/${symbol}`)
	}

	historical_chart_intervals = [
		'1min', '5min', '15min', '30min', '1hour'
	];

	async validate_historical_chart_interval(interval) {
		if (!this.historical_chart_intervals.includes(interval)) {
			throw ReferenceError(`${interval} is not valid, please select one of the following ${this.historical_chart_intervals}`)
		}
	}

	async historical_chart(id, { interval }) {
		this.validate_historical_chart_interval(interval);
		return this.gep(`historical-chart/${interval}/${id}`)
	}

	historical_price_full_serietypes = [
		'line'
	];

	async validate_historical_price_full_serietype({ serietype }) {
		if (serietype && !this.historical_price_full_serietypes.includes(serietype)) {
			throw ReferenceError(`${serietype} is not valid, please select one of the following ${this.historical_price_full_serietypes}`)
		}
	}

	historical_price_full_groups = [
		'index',
		'commodity',
		'etf',
		'tsx',
		'euronext',
		'mutual_fund',
		'etf',
		'stock_dividend',
		'stock_split',
		'crypto',
		'forex'
	];

	async validate_historical_price_full_group(group) {
		if (group && !this.historical_price_full_groups.includes(group)) {
			throw ReferenceError(`${group} is not valid, please select one of the following ${this.historical_price_full_groups}`)
		}
	}

	async historical_price_full(id, { group, ...searchParams }) {
		this.validate_historical_price_full_serietype(searchParams);
		this.validate_historical_price_full_group(group);
		const group_path = group ? group + '/' : '';
		return this.gep(`historical-price-full/${group_path}${id}`, searchParams)
	}

	async majors_indexes(symbol = '') {
		return this.gep(`majors-indexes/${symbol}`)
	}

	async quotes(id) {
		return this.gep(`quotes/${id}`)
	}

	async symbol_available_indexes() {
		return this.gep(`symbol/available-indexes`)
	}


	async quotes_commodity(commodity) {
		return this.gep(`quotes/${commodity}`)
	}


	async historical_chart_PRNT({ interval, PRNT }) {
		this.validate_historical_chart_interval(interval);
		return this.gep(`historical-chart/${interval}/${PRNT}`)
	}


	stock_groups = [
		'actives', 'gainers', 'losers', 'sectors-performance'
	];

	async validate_stock_groups(group) {
		if (!this.stock_groups.includes(group)) {
			throw ReferenceError(`${group} is not valid, please select one of the following ${this.stock_groups}`)
		}
	}

	async stock(group) {
		this.validate_stock_groups(group);
		return this.gep(`stock/${group}`)
	}

	async is_the_market_open() {
		return this.gep(`is-the-market-open`)
	}

	async cryptocurrencies() {
		return this.gep(`cryptocurrencies`)
	}

	async cryptocurrency(symbol) {
		return this.gep(`cryptocurrency/${symbol}`)
	}

	symbol_groups = [
		'available-indexes',
		'available-commodities',
		'available-etfs',
		'available-mutual-funds',
		'available-euronext',
		'available-tsx',
		'available-cryptocurrencies',
		'available-forex-currency-pairs'
	];

	async validate_symbol_group(group) {
		if (!this.symbol_groups.includes(group)) {
			throw ReferenceError(`${group} is not valid, please select one of the following ${this.symbol_groups}`)
		}
	}

	async symbol(group) {
		this.validate_symbol_group(group);
		return this.gep(`symbol/${group}`)
	}

	async forex(currency_pair = '') {
		return this.gep(`forex/${currency_pair}`)
	}

	// CompanySummary = {
	//  async 	profile(symbol) {
	// 		return this.company_profile(symbol)
	// 	},
	//  async 	quote(symbol) {
	// 		return this.quote(symbol)
	// 	},
	//  async 	search(query, searchParams) {
	// 		return this.search(query, searchParams)
	// 	},
	// 	financials: {
	// 		statements: {
	// 		 async 	income_statement(symbol, searchParams) {
	// 				return this.financials_income_statement(symbol, searchParams)
	// 			},
	//
	// 		 async 	balance_sheet_statement(symbol, searchParams) {
	// 				return this.financials_balance_sheet_statement(symbol, searchParams)
	// 			},
	//
	// 		 async 	cash_flow_statement(symbol, searchParams) {
	// 				return this.financials_cash_flow_statement(symbol, searchParams)
	// 			},
	// 		 async 	growth(symbol, searchParams) {
	// 				return this.financial_statement_growth(symbol, searchParams)
	// 			}
	// 		},
	// 	 async 	ratios(symbol) {
	// 			return this.financial_ratios(symbol)
	// 		}
	// 	},
	//  async 	key_metrics(symbol, searchParams) {
	// 		return this.company_key_metrics(symbol, searchParams)
	// 	},
	//  async 	rating(symbol) {
	// 		return this.company_rating(symbol)
	// 	},
	//  async 	discounted_cash_flow(symbol) {
	// 		return this.discounted_cash_flow(symbol)
	// 	},
	//  async 	historical_discounted_cash_flow(symbol, searchParams) {
	// 		return this.company_historical_discounted_cash_flow(symbol, searchParams)
	// 	},
	//  async 	stock_list() {
	// 		return this.company_stock_list()
	// 	},
	//  async 	stock_real_time_price(symbol) {
	// 		return this.stock_real_time_price(symbol)
	// 	}
	// };
	// StockTimeSeries = {
	//
	// }
}

console.log(new FinancialModelingPrepAPI().quotes_commodity())

module.exports = FinancialModelingPrepAPI;