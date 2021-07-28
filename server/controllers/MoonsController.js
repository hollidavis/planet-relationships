import BaseController from '../utils/BaseController'
import { moonsService } from '../services/MoonsService'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  /**
       * Gets all moons
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getAll(req, res, next) {
    try {
      const moons = await moonsService.getAll(req.query)
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Gets moon by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getById(req, res, next) {
    try {
      const moon = await moonsService.getById(req.params.id)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Creates new moon
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async create(req, res, next) {
    try {
      const moon = await moonsService.create(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Edits moon by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const moon = await moonsService.edit(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Destroys moon by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async destroy(req, res, next) {
    try {
      await moonsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
