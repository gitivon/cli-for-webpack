// const { argv } = require('yargs');
// const { Linter, Configuration } = require('tslint');
// const path = require('path');
// const fs = require('fs');

// declare namespace NodeJS {
//   interface ProcessEnv {
//     NODE_ENV: 'development' | 'production' | 'test';
//     project: string;
//   }
// }
// process.env.NODE_ENV = argv.env.NODE_ENV;

// const fileName = path.resolve(__dirname, `../packages/${argv.env.project}`);

// const configurationFilename = "./tslint.json";
// const options = {
//     fix: false,
//     formatter: "json",
//     rulesDirectory: "customRules/",
//     formattersDirectory: "customFormatters/"
// };

// const fileContents = fs.readFileSync(fileName, "utf8");
// const linter = new Linter(options);
// const configuration = Configuration.findConfiguration(configurationFilename, fileName).results;
// linter.lint(fileName, fileContents, configuration);
// const result = linter.getResult();

// console.log(process.env);