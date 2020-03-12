import * as express from 'express';
import db from '../../db';
import { isAdmin } from '../../middlewares/auth-checkpoints';
import { Request } from "express";

const router = express.Router();

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let [book] = await db.bookCrud.findSingleBook(id);
    res.json(book);
  } catch (error) {
    console.log(error);
    res.status(500).json('You have an error!');
  }
});

router.get('/', async (req, res) => {
  try {
    let users = await db.bookCrud.findAllBooks();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json('You have an error!');
  }
});

router.post('/', isAdmin, async (req: ReqUser, res) => {
  let title = req.body.title;
  let price = req.body.price;
  let author = req.body.author;
  let categoryid = req.body.categoryid;
  if (categoryid !== undefined) {
    try {
      let result = await db.bookCrud.addOne(title, price, author, categoryid);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json('There is an error!');
    }
  } else {
    res.status(500).json('Category Id can not be null!');
  }
});

router.put('/:id', isAdmin, async (req: ReqUser, res) => {
  let title = req.body.title;
  let price = req.body.price;
  let author = req.body.author;
  let categoryid = req.body.categoryid;
  let id = req.params.id;
  if (categoryid !== undefined) {
    try {
      await db.bookCrud.update(title, price, author, categoryid, id);
      res.json('Edited!');
    } catch (error) {
      console.log(error);
      res.status(500).json('There is an error!');
    }
  } else {
    res.status(500).json('Category Id can not be null!');
  }
});

router.delete('/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  try {
    await db.bookCrud.destroy(id);
    res.json('Deleted!');
  } catch (error) {
    console.log(error);
    res.status(500).json('There is an error!');
  }
});

export default router;

interface ReqUser extends Request {
  user: {
    id: number;
    role: string;
  };
}
