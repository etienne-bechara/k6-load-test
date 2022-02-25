import { group } from 'k6';
import http from 'k6/http';
import { Options } from 'k6/options';

import { MainParams } from './main.interface';

/**
 * Configure test options.
 * @see https://k6.io/docs/using-k6/scenarios/executors/ For execution strategies
 * @see https://k6.io/docs/using-k6/options/ For all available options
 */
export const options: Options = {
  vus: Number(__ENV.K6_VUS),
  iterations: Number(__ENV.K6_ITERATIONS),
  duration: __ENV.K6_DURATION,
};

/**
 * Test setup before calling default function.
 * Returning object will be provided as argument to it.
 */
export function setup(): MainParams {
  const host = __ENV.TARGET_HOST;
  return { host };
}

/**
 * Run K6 test.
 * @param params
 */
export default function (params: MainParams): void {
  const { host } = params;

  group('main', () => {
    http.get(host);
  });
}
