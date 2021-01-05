[![BangaJS Logo](https://i.ibb.co/GC3hqjC/banga-banner.jpg)](https://bangajs.netlify.app/)

BàngáJS is a CLI generator for scaffolding [ExpressJS](https://expressjs.com) applications and generating application layer files for speed and efficiency.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installing BàngáJS

BàngáJS available on the [Node.js](https://nodejs.org/en/) module through the
[npm registry](https://www.npmjs.com/).

Before installing, make sure you've [downloaded and installed Node.js](https://nodejs.org/en/download/)

Then install BàngáJS globally:

```bash
$ npm install bangajs -g
```

## Features

- Quick project setup.
- Pre-set authentication functionality.
- Generate application layer files with CRUD methods.

## Docs

- Check out the [Documentation](https://bangajs.netlify.app/)

## Getting started

Let's create a new Express app **hello-world**, and it would be created in a new folder called **hello-world** in the current working directory:

```bash
$ banga new hello-world
```

Then navigate into the newly created project and start up the server:

```bash
$ cd hello-world
$ npm run dev
```

By default the server will be running on http://localhost:2020/

## Contributors

The author of BàngáJS is [Onyegbu Ifedili](https://github.com/saucecodee)

[List of all contributors](https://github.com/saucecodee/banga/graphs/contributors)

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/bangajs.svg
[npm-url]: https://npmjs.com/package/bangajs
[downloads-image]: https://img.shields.io/npm/dm/bangajs.svg
[downloads-url]: https://npmcharts.com/compare/bangajs?minimal=true
