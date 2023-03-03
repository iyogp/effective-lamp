import express, { Request, Response } from 'express';

import { TennisClubs } from '../models/tennisclub.model';

const router = express.Router();

router.get('/api/tennisclubs', [], async (req: Request, res: Response) => {
    const tennisClub = await TennisClubs.find({}).exec();
    console.log(tennisClub);
    return res.status(200).send(tennisClub);
});

export { router as tennisClubRouter };