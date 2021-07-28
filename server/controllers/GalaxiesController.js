import BaseController from '../utils/BaseController'
import { galaxiesService } from '../services/GalaxiesService'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  /**
       * Gets all galaxies
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getAll(req, res, next) {
    try {
      const Galaxies = await galaxiesService.getAll(req.query)
      res.send(Galaxies)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Gets galaxy by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getById(req, res, next) {
    try {
      const Galaxy = await galaxiesService.getById(req.params.id)
      res.send(Galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Creates new galaxy
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async create(req, res, next) {
    try {
      const Galaxy = await galaxiesService.create(req.body)
      res.send(Galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Edits galaxy by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const Galaxy = await galaxiesService.edit(req.body)
      res.send(Galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Destroys galaxy by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async destroy(req, res, next) {
    try {
      await galaxiesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
