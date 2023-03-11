import { Request, Response } from "express";

import { TennisClubs } from "../models/tennisclub.model";

export default class TennisClubController {

    /**
     * Find all tennis club documents
     * @param req Request object
     * @param res Response object
     * @returns Promise
     */
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
            return res.status(200).send({
                success: true,
                data: tennisClubs
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).send({
                    success: false,
                    message: error.toString(),
                    data: null
                });
            }
        }
    }

    /**
     * Find one tennis club document by id
     * @param req Request object
     * @param res Response object
     * @returns Promise 
     */
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
            return res.status(200).send({
                success: true,
                data: tennisClub
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).send({
                    success: false,
                    message: error.toString(),
                    data: null
                });
            }
        }
    }

    /**
     * Update a tennis club document by id
     * @param req Request object
     * @param res Response object
     * @returns Promise 
     */
    public update = async (req: Request, res: Response): Promise<any> => {
        const { club, type, address, courts, contacts } = req.body;
        try {
            const tennisClubUpdated = await TennisClubs.findByIdAndUpdate(
                req.params.id,
                {
                    $set: {
                        "club": club,
                        "type": type,
                        "address": address,
                        "courts": courts,
                        "contacts": contacts
                    }
                },
                { new: true }
            );
            if (!tennisClubUpdated) {
                return res.status(404).send({
                    success: false,
                    message: 'Tennis club not found',
                    data: null
                });
            }
            return res.status(200).send({
                success: true,
                data: tennisClubUpdated
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).send({
                    success: false,
                    message: error.toString(),
                    data: null
                });
            }
        }
    }

    /**
     * Removes a tennis club document by id
     * @param req Request object
     * @param res Response object
     * @returns Promise
     */
    public remove = async (req: Request, res: Response): Promise<any> => {
        try {
            const tennisClub = await TennisClubs.findByIdAndRemove(req.params.id);
            if (!tennisClub) {
                return res.status(404).send({
                    success: false,
                    message: 'Tennis club not found',
                    data: null
                });
            }
            return res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).send({
                    success: false,
                    message: error.toString(),
                    data: null
                });
            }
        }
    }

}