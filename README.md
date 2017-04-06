# ![Wetland-cli](https://cdn.rawgit.com/SpoonX/wetland/391040eba795183550bfff01d7c0ca56d01b5530/wetland.svg)

Command line tools for [wetland ORM](https://wetland.spoonx.org).

## Installation

`npm i -g wetand-cli`

## Commands

Run `wetland help` to find the commands that are at your disposal.

Examples:

* `wetland migrator schema -d` _(dump the queries for the current schema)_
* `wetland migrator schema -r` _(apply queries for the current schema)_
* `wetland migrator status` _(shows the current status of your migrations)_
* `wetland generator entity user username,email,password` _(use a generator, read below for more info)_

## Gernerators

Wetland-cli offers support for generators using [Boards](https://github.com/SpoonX/boards).

An example generator, one you might want to install as well, is [wetland-generator-entity](https://github.com/SpoonX/wetland-generator-entity).

`npm i -D board-wetland-entity`

You can find a skeleton, as a base to create your own here at [wetland-generator-skeleton](https://github.com/SpoonX/wetland-generator-skeleton).

## License

MIT
