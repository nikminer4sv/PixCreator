/* tslint:disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;


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
    projectId: 'pixcreator-66c34',
    appId: '1:653216671594:web:5ff198a1e99a6bcbe16713',
    databaseURL: 'https://pixcreator-66c34-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'pixcreator-66c34.appspot.com',
    locationId: 'europe-west6',
    apiKey: 'AIzaSyB0LZwbTpmKo48GjTqHHJ7PxB1TIJzKNNg',
    authDomain: 'pixcreator-66c34.firebaseapp.com',
    messagingSenderId: '653216671594',
    measurementId: 'G-XNCRS1ET4J',
    GGWP: ${process.env.GGWP}
  },
  production: true
};

`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file
writeFileUsingFS('./src/environments/environment.ts', environmentFileContent);
/* tslint:enable */
