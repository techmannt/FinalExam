import { Query } from '../index';

const findAllBooks = () => Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid');
const findSingleBook = (id: string) => Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid WHERE books.id = ?', [id]);
const addOne = (title: string, price: number, author: string, categoryid: number) => Query('INSERT INTO books (title, price, author, categoryid) VALUE (?)', [[title, price, author, categoryid]]);
const update = (title: string, price: number, author: string, categoryid: number, id: string) => Query('UPDATE books SET title = ?, price = ?, author = ?, categoryid = ? WHERE id = ?', [title, price, author, categoryid, id]);
const destroy = (id: string) => Query('DELETE FROM books WHERE id = ?', [id]);

export default {
  addOne,
  findAllBooks,
  findSingleBook,
  update,
  destroy
}
