'use strict';

import AlphaVantage from "../../src";

const env = process.env;
// Clear the current environment variables for testing.
process.env = {};

it(`initialization without a config throws an error`, () => {
  expect(()=>new AlphaVantage()).toThrowErrorMatchingSnapshot();
});

it(`initialization without an api key throws an error`, () => {
  expect(()=>new AlphaVantage()).toThrowErrorMatchingSnapshot();
});

it(`initialization without an api key, but with env key works`, () => {
  expect.assertions(1);
  try {
    process.env = Object.assign(env,{AV_KEY:'demo'});
    const alpha = new AlphaVantage();
    expect(alpha).toBeDefined();
  } catch (e) {
    expect(e).toBeUndefined();
  }
});
