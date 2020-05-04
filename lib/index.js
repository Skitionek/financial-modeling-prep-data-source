"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  22/04/2020
*/
const {
  RESTDataSource
} = require("apollo-datasource-rest");

const autoBind = require('auto-bind');
/**
 * The FinancialModelingPrep core module.
 */


class FinancialModelingPrepAPI extends RESTDataSource {
  constructor(config) {
    //
    super();

    _defineProperty(this, "exchange_parameters", ["ETF", "MUTUAL_FUND", "COMMODITY", "INDEX", "CRYPTO", "FOREX", "TSX", "AMEX", "NASDAQ", "NYSE", "EURONEXT"]);

    _defineProperty(this, "historical_chart_intervals", ['1min', '5min', '15min', '30min', '1hour']);

    _defineProperty(this, "historical_price_full_serietypes", ['line']);

    _defineProperty(this, "historical_price_full_groups", ['index', 'commodity', 'etf', 'tsx', 'euronext', 'mutual_fund', 'etf', 'stock_dividend', 'stock_split', 'crypto', 'forex']);

    _defineProperty(this, "stock_groups", ['actives', 'gainers', 'losers', 'sectors-performance']);

    _defineProperty(this, "symbol_groups", ['available-indexes', 'available-commodities', 'available-etfs', 'available-mutual-funds', 'available-euronext', 'available-tsx', 'available-cryptocurrencies', 'available-forex-currency-pairs']);

    this.baseURL = `https://financialmodelingprep.com/api/v3/`;
    this.initialize(config || {});
    autoBind(this);
  }

  encode_argument(arg) {
    if (Array.isArray(arg)) {
      return arg.length ? arg.map(encodeURI).join(',') : '';
    }

    return encodeURI(arg || '');
  }

  get(strings, ...params) {
    const path = strings.reduce((o, n, i) => o + n + this.encode_argument(params[i]), '');
    return (...rest) => super.get(path, ...rest);
  }

  async parseBody(response) {
    const data = await super.parseBody(response);
    return this.parse(data);
  }

  parse(data) {
    if (typeof data === 'string' || data instanceof String) {
      const number_cast = Number(data);
      return Number.isNaN(number_cast) ? data : number_cast;
    }

    if (Array.isArray(data)) {
      return data.map(this.parse);
    }

    if (typeof data === 'object' && data !== null) {
      const mapped_data = {};

      for (const d in data) {
        if (data.hasOwnProperty(d)) {
          mapped_data[d] = this.parse(data[d]);
        }
      }

      return mapped_data;
    }

    return data;
  }

  async company_profile(symbol) {
    return this.get`company/profile/${symbol}`();
  }

  async quote(id) {
    return this.get`quote/${id}`();
  }

  async validate_search_exchange_parameter(exchange) {
    if (!this.exchange_parameters.includes(exchange)) {
      throw ReferenceError(URI`${exchange} is not valid, please select one of the following ${this.exchange_parameters}`);
    }
  }

  async search(query, _ref) {
    let {
      exchange
    } = _ref,
        searchParams = _objectWithoutProperties(_ref, ["exchange"]);

    if (exchange) this.validate_search_exchange_parameter(exchange);
    return this.get`search`(_objectSpread({
      query,
      exchange
    }, searchParams));
  }

  async financials_income_statement(symbol, searchParams) {
    return this.get`financials/income-statement/${symbol}`(searchParams);
  }

  async financials_balance_sheet_statement(symbol, searchParams) {
    return this.get`financials/balance-sheet-statement/${symbol}`(searchParams);
  }

  async financials_cash_flow_statement(symbol, searchParams) {
    return this.get`financials/cash-flow-statement/${symbol}`(searchParams);
  }

  async financial_ratios(symbol) {
    return this.get`financial-ratios/${symbol}`();
  }

  async enterprise_value(symbol, searchParams) {
    return this.get`enterprise-value/${symbol}`(searchParams);
  }

  async company_key_metrics(symbol, searchParams) {
    return this.get`company-key-metrics/${symbol}`(searchParams);
  }

  async financial_statement_growth(symbol, searchParams) {
    return this.get`financial-statement-growth/${symbol}`(searchParams);
  }

  async company_rating(symbol) {
    return this.get`company/rating/${symbol}`();
  }

  async company_discounted_cash_flow(symbol) {
    return this.get`company/discounted-cash-flow/${symbol}`();
  }

  async company_historical_discounted_cash_flow(symbol, searchParams) {
    return this.get`company/historical-discounted-cash-flow/${symbol}`(searchParams);
  }

  async company_stock_list() {
    return this.get`company/stock/list`();
  }

  async stock_real_time_price(symbol = '') {
    return this.get`stock/real-time-price/${symbol}`();
  }

  async validate_historical_chart_interval(interval) {
    if (!this.historical_chart_intervals.includes(interval)) {
      throw ReferenceError(`${interval} is not valid, please select one of the following ${this.historical_chart_intervals}`);
    }
  }

  async historical_chart(id, {
    interval
  }) {
    this.validate_historical_chart_interval(interval);
    return this.get`historical-chart/${interval}/${id}`();
  }

  async validate_historical_price_full_serietype({
    serietype
  }) {
    if (serietype && !this.historical_price_full_serietypes.includes(serietype)) {
      throw ReferenceError(`${serietype} is not valid, please select one of the following ${this.historical_price_full_serietypes}`);
    }
  }

  async validate_historical_price_full_group(group) {
    if (group && !this.historical_price_full_groups.includes(group)) {
      throw ReferenceError(`${group} is not valid, please select one of the following ${this.historical_price_full_groups}`);
    }
  }

  async historical_price_full(id, _ref2) {
    let {
      group
    } = _ref2,
        searchParams = _objectWithoutProperties(_ref2, ["group"]);

    this.validate_historical_price_full_serietype(searchParams);
    this.validate_historical_price_full_group(group);
    const group_path = group ? group + '/' : '';
    return this.get`historical-price-full/${group_path}${id}`(searchParams);
  }

  async majors_indexes(symbol = '') {
    return this.get`majors-indexes/${symbol}`();
  }

  async quotes(id) {
    return this.get`quotes/${id}`();
  }

  async symbol_available_indexes() {
    return this.get`symbol/available-indexes`();
  }

  async quotes_commodity(commodity) {
    return this.get`quotes/${commodity}`();
  }

  async historical_chart_PRNT({
    interval,
    PRNT
  }) {
    this.validate_historical_chart_interval(interval);
    return this.get`historical-chart/${interval}/${PRNT}`();
  }

  async validate_stock_groups(group) {
    if (!this.stock_groups.includes(group)) {
      throw ReferenceError(`${group} is not valid, please select one of the following ${this.stock_groups}`);
    }
  }

  async stock(group) {
    this.validate_stock_groups(group);
    return this.get`stock/${group}`();
  }

  async is_the_market_open() {
    return this.get`is-the-market-open`();
  }

  async cryptocurrencies() {
    return this.get`cryptocurrencies`();
  }

  async cryptocurrency(symbol) {
    return this.get`cryptocurrency/${symbol}`();
  }

  async validate_symbol_group(group) {
    if (!this.symbol_groups.includes(group)) {
      throw ReferenceError(`${group} is not valid, please select one of the following ${this.symbol_groups}`);
    }
  }

  async symbol(group) {
    this.validate_symbol_group(group);
    return this.get`symbol/${group}`();
  }

  async forex(currency_pair = '') {
    return this.get`forex/${currency_pair}`();
  } // CompanySummary = {
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

module.exports = FinancialModelingPrepAPI;
//# sourceMappingURL=index.js.map