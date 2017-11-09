# ![Wetland-cli](https://cdn.rawgit.com/SpoonX/wetland/391040eba795183550bfff01d7c0ca56d01b5530/wetland.svg)

Command line tools for [wetland ORM](https://wetland.spoonx.org).

## Installation

`npm i -g wetland-cli`

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

`npm i -D wetland-generator-entity`

You can find a skeleton, as a base to create your own here at [wetland-generator-skeleton](https://github.com/SpoonX/wetland-generator-skeleton).

### List generators

To list all available generators, run:

`wetland generator --help`

Example:

```bash
$ wetland generator --help

  Usage: wetland-generator [options] [command]


  Commands:

    entity [options] <name>    Generate a new entity
    skeleton [options] <name>  Generate a new greeting file

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -c, --config <path>  defaults to $PWD/(wetland.js|wetland.json)

  Examples:

    $ wetland generator entity user -l ts -e -f "username,password:string,email:field({type: text, size: 255})"
    $ wetland generator skeleton greeting -a -x txt
```

Help for a specific generator

```bash
 $ wetland generator entity --help

  Usage: entity [options] <name>

  Generate a new entity

  Options:

    -h, --help                 output usage information
    -l, --language <language>  One of "ts" or "js" for the target language (defaults to js)
    -e, --extend               Set to extend wetland.Entity for .toObject (defaults to false)
    -f, --fields <fields>      Fields to add. E.g. `-f username:string,password:string`
    -i, --interactive          Use interactive mode to design the entity
```

## License

MIT
