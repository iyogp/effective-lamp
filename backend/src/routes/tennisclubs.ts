import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/tennisclubs', (req: Request, res: Response) => {
    return res.send('a tennis club');
});

router.post('/api/tennisclubs', (req: Request, res: Response) => {
    return res.send('a new tennis club added');
});

export { router as tennisClubRouter };