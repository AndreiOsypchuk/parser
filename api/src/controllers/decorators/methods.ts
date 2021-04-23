import 'reflect-metadata';
import { Meta, Methods } from './constants';
const methodFactory = (method: string) => {
  return (path: string) => {
    return (target: any, key: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata(Meta.METHOD, method, target, key);
      Reflect.defineMetadata(Meta.PATH, path, target, key);
    };
  };
};

export const get = methodFactory(Methods.GET);
export const post = methodFactory(Methods.POST);
export const del = methodFactory(Methods.DELETE);
