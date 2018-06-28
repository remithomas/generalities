# Generalities [![Build Status](https://travis-ci.org/remithomas/generalities.svg?branch=master)](https://travis-ci.org/remithomas/generalities) [![npm version](https://img.shields.io/npm/v/generalities.svg?style=flat-square)](https://www.npmjs.com/package/generalities)

> Simple common constants

- Country codes
- Http codes
- Language codes

## How to use

```bash
npm install generalities --save
```

### Country codes

```js
import { UNITED_KINGDOM } from 'generalities/country-codes';
// print: gb
console.log(UNITED_KINGDOM);
```

### Http Codes

```js
import { HTTP_CODE_NOT_FOUND } from 'generalities/http-codes';
// print: 404
console.log(HTTP_CODE_NOT_FOUND);
```

### Language Codes

```js
import { FRENCH, TAHITIAN } from 'generalities/language-codes';
// print: fr,ty
console.log(FRENCH, TAHITIAN);
```

## Developement

```bash
npm install
```

Add your `generalities` and then run `npm run lint`

## Contributing

Please feel free to submit, comment anything on this repo :)

## Todos

- [ ] Currency codes
