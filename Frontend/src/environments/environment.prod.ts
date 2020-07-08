export const environment = {
  production: true,
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
