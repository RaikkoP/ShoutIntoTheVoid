import { Request, Response } from 'express';
import Message from "../models/message.model";


const messageController = {
    makeNewMessage: async (req: Request, res: Response) => {
        const newMessage = new Message({
            body: req.body.body
        });

        Message.newMessage(newMessage, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: 'Error making new message'
                });
            } else {
                console.log(data);
            }
        })
    }
}

export default messageController;