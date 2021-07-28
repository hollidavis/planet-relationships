import BaseController from '../utils/BaseController'
import { starsService } from '../services/StarsService'
import { planetsService } from '../services/PlanetsService'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/planets', this.getPlanetsByStarId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  /**
       * Gets all stars
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getAll(req.query)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Gets star by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getById(req, res, next) {
    try {
      const star = await starsService.getById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Gets plants by GalaxyID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getPlanetsByStarId(req, res, next) {
    try {
      const planets = await planetsService.getAll({ starId: req.params.id })
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Creates new star
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Edits star by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const star = await starsService.edit(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Destroys star by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async destroy(req, res, next) {
    try {
      await starsService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
