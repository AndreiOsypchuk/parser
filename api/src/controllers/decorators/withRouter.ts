import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import { AppRouter } from '../../router';
import { Meta, Methods } from './constants';
export const router: express.Router = AppRouter.Init();
export const withRouter = (route: string) => (target: any) => {
  for (const key in target.prototype) {
    const routeHandler = target.prototype[key];
    const method: Methods = Reflect.getMetadata(
      Meta.METHOD,
      target.prototype,
      key
    );
    const path: string = Reflect.getMetadata(Meta.PATH, target.prototype, key);

    router[method](route + path, helmet(), routeHandler);
  }
};
