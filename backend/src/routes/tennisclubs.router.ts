import express from 'express';

import TennisClubController from '../controller/tennisclubcontroller';

const tennisClubRouter = express.Router();

const tennisClubController = new TennisClubController();

// retrieve all tennis clubs
tennisClubRouter.get('/api/get/tennisclub', tennisClubController.findAll);

// retrieve a specific tennis club
tennisClubRouter.get('/api/get/tennisclub/:id', tennisClubController.findOne);

// update a tennis club
tennisClubRouter.put('/api/update/tennisclub/:id', tennisClubController.update);

// delete a tennis club
tennisClubRouter.delete('/api/delete/tennisclub/:id', tennisClubController.remove);

export default tennisClubRouter;