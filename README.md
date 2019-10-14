# Qeetup App Server

Application template for server GraphQL projects and implementation of application for [Qeetup about GraphQL](https://qeetup8-graphql.eventbrite.com)

## Technology stack

* [Node.js](https://nodejs.org) - server side JavaScript
* [Yarn](https://yarnpkg.com) - package manager
* [TypeScript](https://www.typescriptlang.org/) - typed superset of JavaScript
* [GraphQL](https://graphql.org/) - query language for API
* [Appolo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server
* [GraphQL Code Generator](https://graphql-code-generator.com/) - typescript code generator from GraphQL schema
* [Jest](https://jestjs.io/) - testing framework

## Installation

* Clone repository - `git clone git@github.com:qest-cz/qeetup-app-server.git`
* Install modules - `yarn install` or simply `yarn`

## Settings

All application settings can be modified locally via `.env` file

## GraphQL Code Generator

For generating TypeScript interfaces from GraphQL schemas use `yarn generate`

## Run the project

* Developer mode - `yarn dev`
* Production mode (plain JavaScript version)
  * First build - `yarn build`
  * Then start - `yarn start`
  * Optionaly cleaning - `yarn clean`
* Run code checks - `yarn code:check`

## Tests

All tests are ran by `yarn test`, that is an alias for `jest` command

* You can also start watch mode by command `yarn test:watch`
* To update jest snapshots there is `yarn test:update`
* For generating of a code coverage use `yarn test:coverage`

## Commit message format

Commit message format is dictated by [Karma specification](http://karma-runner.github.io/3.0/dev/git-commit-msg.html)
