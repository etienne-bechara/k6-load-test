import { group } from 'k6';
import http from 'k6/http';
import { Options } from 'k6/options';

/**
 * Configure test options.
 * @see https://k6.io/docs/using-k6/scenarios/executors/ For execution strategies
 * @see https://k6.io/docs/using-k6/options/ For all available options
 */
export const options: Options = {
  vus: 10,
  iterations: 1000,
  duration: '1m',
};

/**
 * Run K6 test.
 */
export default function (): void {
  group('main', () => {
    http.get('https://www.google.com');
  });
}
