import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    let categories = await db.categories.findCategories();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json('ERROR!');
  }
});

export default router;
