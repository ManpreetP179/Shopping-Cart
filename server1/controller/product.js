const userService = require('../service/product');

class UserController {
    async index(req, res, next) {
        try {
          const user = await userService.getUser(req.params.id);
          res.json(user);
        } catch (err) {
          console.error(err);
          res.status(500).json(err);
        }
      }

      async show(req, res, next) {
        try {
          const user = await userService.getUser(req.params.id);
          res.json(user);
        } catch (err) {
          console.error(err);
          res.status(500).json(err);
        }
      }
}