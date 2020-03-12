import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T=any>(query: string, values?: Array<any>) => {
  return new Promise<T>((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

import bookCrud from './queries/bookCrud';
import categories from './queries/categories';
import users from './queries/users';
import tokens from './queries/tokens';

export default {
  bookCrud,
  categories,
	users,
	tokens
}
