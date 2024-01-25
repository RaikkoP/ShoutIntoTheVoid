import { Request, Response } from 'express';
import Message from "../models/message.model";


const messageController = {
    getAllMessages: async (req: Request, res: Response) => {
        const messageData = ({
            body: req.body.body,
            likes: req.body.likes,
            date: req.body.date,
            id: req.body.id,
        });

        Message.getAll(messageData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error getting messages"
                });
            } else {
                res.json(data);
                return;
            }
        })
    },
    getRandomMessage: async (req: Request, res: Response) => {
        const messageData = ({
            body: req.body.body,
            likes: req.body.likes,
            date: req.body.date,
            id: req.body.id,
        });
        
        Message.getRandom(messageData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error getting messages"
                });
            } else {
                res.json(data);
                return;
            }
        })
    }
}

export default messageController;