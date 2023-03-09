import express from 'express';

import TennisClubController from '../controller/tennisclub.controller';

const router = express.Router();

const tennisClubController = new TennisClubController();

// retrieve all tennis clubs
router.get('/api/tennisclubs', tennisClubController.findAll);

// retrieve a specific tennis club
router.get('/api/tennisclub/:id', tennisClubController.findOne);

export { router as tennisClubRouter };