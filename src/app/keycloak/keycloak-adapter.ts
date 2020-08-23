// import { KeycloakAdapter, KeycloakPromise } from 'keycloak-js';
// declare var Keycloak: any;
// // Implement the 'KeycloakAdapter' interface so that all required methods are guaranteed to be present.
// const MyCustomAdapter: KeycloakAdapter = {
//     var promise = createPromise();

//     login(options) {
//         // Write your own implementation here.
//         console.log("login");
//         return promise.promise;
//     }

//     // The other methods go here...
// };


// function createPromise() {
//     // Need to create a native Promise which also preserves the
//     // interface of the custom promise type previously used by the API
//     let promise = KeycloakPromise<void, void>();
// }

// const keycloak = new Keycloak();

// keycloak.init({
//     adapter: MyCustomAdapter,
// });