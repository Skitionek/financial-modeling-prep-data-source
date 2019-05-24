'use strict';

import AlphaVantageMock from "../mocks/alphaVantageMock";
import { matchesSnapshot } from "../jest.extensions";

let alpha;
beforeAll(() => {
	alpha = new AlphaVantageMock();
});

test(`sma data works`, () => {
  return alpha.technical.sma(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`ema data works`, () => {
  return alpha.technical.ema(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`wma data works`, () => {
  return alpha.technical.wma(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`dema data works`, () => {
  return alpha.technical.dema(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`tema data works`, () => {
  return alpha.technical.tema(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`trima data works`, () => {
  return alpha.technical.trima(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`kama data works`, () => {
  return alpha.technical.kama(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`mama data works`, () => {
  return alpha.technical.mama(`msft`, `daily`, `close`)
    .then(matchesSnapshot);
});

test(`vwap data works`, () => {
  return alpha.technical.vwap(`msft`, `daily`, `close`)
    .then(matchesSnapshot);
});

test(`t3 data works`, () => {
  return alpha.technical.t3(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`macd data works`, () => {
  return alpha.technical.macd(`msft`, `daily`, `close`)
    .then(matchesSnapshot);
});

test(`macdext data works`, () => {
  return alpha.technical.macdext(`msft`, `daily`, `close`)
    .then(matchesSnapshot);
});

test(`stoch data works`, () => {
  return alpha.technical.stoch(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`stochf data works`, () => {
  return alpha.technical.stochf(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`rsi data works`, () => {
  return alpha.technical.rsi(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`stochrsi data works`, () => {
  return alpha.technical.stochrsi(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`willr data works`, () => {
  return alpha.technical.willr(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`adx data works`, () => {
  return alpha.technical.adx(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`adxr data works`, () => {
  return alpha.technical.adxr(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`apo data works`, () => {
  return alpha.technical.apo(`msft`, `daily`, `close`)
    .then(matchesSnapshot);
});

test(`ppo data works`, () => {
  return alpha.technical.ppo(`msft`, `daily`, `close`)
    .then(matchesSnapshot);
});

test(`mom data works`, () => {
  return alpha.technical.mom(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`bop data works`, () => {
  return alpha.technical.bop(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`cci data works`, () => {
  return alpha.technical.cci(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`cmo data works`, () => {
  return alpha.technical.cmo(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`roc data works`, () => {
  return alpha.technical.roc(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`rocr data works`, () => {
  return alpha.technical.rocr(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`aroon data works`, () => {
  return alpha.technical.aroon(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`aroonosc data works`, () => {
  return alpha.technical.aroonosc(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`mfi data works`, () => {
  return alpha.technical.mfi(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`trix data works`, () => {
  return alpha.technical.trix(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`ultosc data works`, () => {
  return alpha.technical.ultosc(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`dx data works`, () => {
  return alpha.technical.dx(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`minus_di data works`, () => {
  return alpha.technical.minus_di(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`plus_di data works`, () => {
  return alpha.technical.plus_di(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`minus_dm data works`, () => {
  return alpha.technical.minus_dm(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`plus_dm data works`, () => {
  return alpha.technical.plus_dm(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`bbands data works`, () => {
  return alpha.technical.bbands(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`midpoint data works`, () => {
  return alpha.technical.midpoint(`msft`, `daily`, 60, `close`)
    .then(matchesSnapshot);
});

test(`midprice data works`, () => {
  return alpha.technical.midprice(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`sar data works`, () => {
  return alpha.technical.sar(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`trange data works`, () => {
  return alpha.technical.trange(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`atr data works`, () => {
  return alpha.technical.atr(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`natr data works`, () => {
  return alpha.technical.natr(`msft`, `daily`, 60)
    .then(matchesSnapshot);
});

test(`ad data works`, () => {
  return alpha.technical.ad(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`adosc data works`, () => {
  return alpha.technical.adosc(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`obv data works`, () => {
  return alpha.technical.obv(`msft`, `daily`)
    .then(matchesSnapshot);
});

test(`ht_trendline data works`, () => {
  return alpha.technical.ht_trendline(`msft`, `daily`, 'close')
    .then(matchesSnapshot);
});

test(`ht_sine data works`, () => {
  return alpha.technical.ht_sine(`msft`, `daily`, 'close')
    .then(matchesSnapshot);
});

test(`ht_trendmode data works`, () => {
  return alpha.technical.ht_trendmode(`msft`, `daily`, 'close')
    .then(matchesSnapshot);
});

test(`ht_dcperiod data works`, () => {
  return alpha.technical.ht_dcperiod(`msft`, `daily`, 'close')
    .then(matchesSnapshot);
});

test(`ht_dcphase data works`, () => {
  return alpha.technical.ht_dcphase(`msft`, `daily`, 'close')
    .then(matchesSnapshot);
});

test(`ht_phasor data works`, () => {
  return alpha.technical.ht_phasor(`msft`, `daily`, 'close')
    .then(matchesSnapshot);
});
