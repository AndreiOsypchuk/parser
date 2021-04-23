declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DB_HOST: string;
    SALT: string;
    JWT_ACC: string;
    JWT_REF: string;
  }
}
