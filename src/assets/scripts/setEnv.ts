/* tslint:disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

console.log(process.env)

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}


// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.prod.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.prod.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');


// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'prod';

// choose the correct targetPath based on the environment chosen
const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
  //gg
  export const environment = {
  firebase: {
    projectId: '${process.env.PROJECT_ID}',
    appId: '${process.env.APP_ID}',
    databaseURL: '${process.env.DATABASE_URL}',
    storageBucket: '${process.env.STORAGE_BUCKET}',
    locationId: '${process.env.LOCATION_ID}',
    apiKey: '${process.env.API_KEY}',
    authDomain: '${process.env.AUTH_DOMAIN}',
    messagingSenderId: '${process.env.MESSAGING_SENDER_ID}',
    measurementId: '${process.env.MEASUREMENT_ID}',
    test: '${process.env.TEST}'
  },
  production: true
};

`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file
writeFileUsingFS('./src/environments/environment.ts', environmentFileContent);
/* tslint:enable */
