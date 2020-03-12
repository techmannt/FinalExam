import { Router } from 'express';
import { tokenCheckpoint, isAdmin } from '../../middlewares/auth-checkpoints';

const router = Router();

router.get('/validate', tokenCheckpoint, isAdmin, async (req, res) => {
    res.json({ msg: 'loggedIn' });
});

export default router;
