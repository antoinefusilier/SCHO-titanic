// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBoa0qeFBViWBEDcUE4F9mhKIg8b1kGni4",
    authDomain: "titanic-school.firebaseapp.com",
    projectId: "titanic-school",
    storageBucket: "titanic-school.appspot.com",
    messagingSenderId: "283711596661",
    appId: "1:283711596661:web:12238d25f8b1110f9bb03c",
    measurementId: "G-R395F43TSZ"
  },
  dataUrl: "https://raw.githubusercontent.com/hkacmaz/Titanic-Passenger-Survivors/master/train.csv"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
