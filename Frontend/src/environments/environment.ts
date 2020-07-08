// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8000/api',
  authentication: {
    login: '/auth/login',
    logout: 'auth/logout',
  },
  user_type: {
    add: '/user_type/add',
    view: '/user_type/view',
    delete: '/user_type/delete',
    update: '/user_type/update',
    list: '/user_types'
  },
  user: {
    add: '/user/add',
    view: '/user/view',
    delete: '/user/delete',
    update: '/user/update',
    list: '/users'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
