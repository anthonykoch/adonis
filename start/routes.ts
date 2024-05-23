/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import env from '#start/env'

console.log(env.get('PORT'))

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
