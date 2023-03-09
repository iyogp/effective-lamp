import { Request, Response } from "express";

import { TennisClubs } from "../models/tennisclub.model";

export default class TennisClubController {

    public findAll = async (req: Request, res: Response): Promise<any> => {
        try {
            const tennisClubs = await TennisClubs.find({}).exec();
            if (!tennisClubs) {
                return res.status(404).send({
                    success: false,
                    message: 'Tennis clubs not found',
                    data: null
                });
            }
            res.status(200).send({
                success: true,
                data: tennisClubs
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send({
                    success: false,
                    message: error.toString(),
                    data: null
                });
            }
        }
    };

    public findOne = async (req: Request, res: Response): Promise<any> => {
        try {
            const tennisClub = await TennisClubs.findById(req.params.id).exec();
            if (!tennisClub) {
                return res.status(404).send({
                    success: false,
                    message: 'Tennis club not found',
                    data: null
                });
            }
            res.status(200).send({
                success: true,
                data: tennisClub
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send({
                    success: false,
                    message: error.toString(),
                    data: null
                });
            }
        }
    }

}