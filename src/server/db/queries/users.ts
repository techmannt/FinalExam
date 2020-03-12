import { Query } from '../index';
import { TUsers } from '../models';

const find = (column: string, value: string | number) => Query<TUsers[]>('SELECT * FROM Users WHERE ?? = ?', [column, value]);
const addUser = (email: string, password: string, name: string) => Query('INSERT INTO users (email, password, name) VALUE (?)', [[email, password, name]]);

const findEmail = (email: string) => Query('SELECT * FROM users WHERE email = ?', [email]);
const findId = (id: number) => Query('SELECT * FROM users WHERE id = ', [id]);

export default {
    find,
    addUser,
    findEmail,
    findId
}
