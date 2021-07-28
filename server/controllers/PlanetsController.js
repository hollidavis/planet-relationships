import BaseController from '../utils/BaseController'
import { planetsService } from '../services/PlanetsService'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  /**
       * Gets all planets
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getAll(req.query)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Gets planet by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getById(req, res, next) {
    try {
      const planet = await planetsService.getById(req.params.id)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Creates new planet
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async create(req, res, next) {
    try {
      const planet = await planetsService.create(req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Edits planet by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const planet = await planetsService.edit(req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Destroys planet by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async destroy(req, res, next) {
    try {
      await planetsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
