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
       * Function Description
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getAll(req, res, next) {
    try {
      const Galaxies = await GalaxiesService.getAll(req.query)
      res.send(Galaxies)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Function Description
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getById(req, res, next) {
    try {
      const Galaxy = await GalaxiesService.getById(req.params.id)
      res.send(Galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Function Description
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async create(req, res, next) {
    try {
      const Galaxy = await GalaxiesService.create(req.body)
      res.send(Galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Function Description
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const Galaxy = await GalaxiesService.edit(req.body)
      res.send(Galaxy)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Function Description
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async destroy(req, res, next) {
    try {
      const Galaxy = await GalaxiesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
