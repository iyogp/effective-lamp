import express, { Request, Response } from 'express';

import { TennisClubs } from '../models/tennisclub.model';

const router = express.Router();

/** GET: Fetch all tennis club documents from mongodb database. */
router.get('/api/tennisclubs', [], async (req: Request, res: Response) => {
    const tennisClubs = await TennisClubs.find({}).exec();
    return res.status(200).send(tennisClubs);
});

/** GET: Fetch a tennis club document from mongodb database by id */
router.get('/api/tennisclubs/:id', [], async (req: Request, res: Response) => {
    const tennisClub = await TennisClubs.find({ _id: req.params.id }).exec();
    return res.status(200).send(tennisClub);
});

export { router as tennisClubRouter };