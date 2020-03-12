import { Query } from '../index';
import { TTokens } from '../models';

const insert = (userid: number) => Query<{ insertId: number }>('INSERT INTO tokens (userid) VALUE (?)', [[userid]]);
const update = (id: number, token: string) => Query('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);
const match = (token: string, userid: number, id: number) => Query<TTokens[]>('SELECT * FROM tokens WHERE token = ? AND userid = ? AND id = ?', [token, userid, id]);

export default {
    insert,
    update,
    match
}
