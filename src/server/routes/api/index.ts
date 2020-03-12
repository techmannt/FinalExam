import { Router } from 'express';
import { tokenCheckpoint } from '../../middlewares/auth-checkpoints';
import categoriesRouter from './categories';
import booksRouter from './books';
const router = Router();

router.use(tokenCheckpoint);

router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);

export default router;
