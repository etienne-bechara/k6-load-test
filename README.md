# K6 Load Test - TypeScript Template

This project offers a quick solution to load test an API in TypeScript language.

It is based on [K6](https://k6.io/docs/) which is a feature rich free tool for load testing.

## Installation

Download and [install](https://k6.io/docs/getting-started/installation/) K6 based on your platform.

Install Node.js dependencies for typings information:

```
npm i
```

## Running

Modify `source/main.ts` to your liking, if you would like to use environment variables copy `.env.schema` as `.env`.

Then run the built-in script:

```
npm test
```

Results will be output in the console as well as in `result.csv` file.
