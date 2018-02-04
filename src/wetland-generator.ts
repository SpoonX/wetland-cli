#!/usr/bin/env node
import * as program from 'commander';
import {getVersion, bootstrap, unexpectedError, registerHelpHandler} from './helpers';

bootstrap();

const {Boards}          = require('boards');
const {PluginDiscovery} = require('plugin-discovery');

class WetlandGenerator {
  private boards: any;

  private program: any;

  public constructor() {
    this.program = program;

    program
      .version(getVersion())
      .option('-c, --config <path>', 'defaults to $PWD/(wetland.js|wetland.json)');

    this.buildBoards();
  }

  registerHelpHandler(examples) {
    registerHelpHandler('generator', examples);
  }

  buildBoards() {
    let examples = [];

    this.boards = new Boards({
      discoveryConfig: {
        prefix               : 'wetland-generator',
        dictionaryKeyStrategy: PluginDiscovery.constants.STRATEGY_STRIP_PREFIX,
        configurers          : {
          wetland: (key, plugin, rootImport) => {
            examples = examples.concat(rootImport.examples);

            let command = this.program.command(rootImport.command).description(rootImport.description);

            rootImport.options.forEach(option => {
              command.option(option.option, option.description);
            });

            command.action((name, options) => {
              if (!options) {
                options = name;
              } else {
                options.name = name;
              }

              let generatorName = options._name;

              this.boards.generate(generatorName, options).catch(unexpectedError);
            });
          }
        }
      }
    });

    this.registerHelpHandler(examples);
  }
}

let generators = new WetlandGenerator();

program.parse(process.argv);
