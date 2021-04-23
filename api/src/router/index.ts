import express from 'express';

export class AppRouter {
  static Instance: express.Router;
  static Init() {
    if (!AppRouter.Instance) {
      AppRouter.Instance = express.Router();
    }
    return AppRouter.Instance;
  }

  static Get() {
    return AppRouter.Instance;
  }
}
