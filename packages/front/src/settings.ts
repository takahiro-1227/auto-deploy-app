/* eslint-disable prefer-destructuring */
type NODE_ENV = 'development' | 'testing' | 'production';

export const NODE_ENV = process.env.NODE_ENV as NODE_ENV;

export const API_URL = process.env.API_URL as string;