import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index(ctx: HttpContext) {
    return ctx.inertia.render('users/index', {test: 4})
  }
}
