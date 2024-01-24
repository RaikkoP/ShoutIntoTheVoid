import db from "../utilities/database";

interface MessageInterface {
    body: string;
    likes?: number;
    date?: string;
    id?: number;
};

interface ErrorInterface {
    message: string;
}

class Message {
    body: string;
    likes?: number;
    date?: string;
    id?: number;

    constructor({ body, likes, date, id }: MessageInterface) {
        this.body = body;
        this.likes = likes;
        this.date = date;
        this.id = id;
    }

    static getAll(message: MessageInterface, result: (error: ErrorInterface | string | null, data: MessageInterface[] | null) => void) {
        db.all('SELECT * FROM messages', [], async (err: Error, res: MessageInterface[]) => {
            if (err) {
                result(err, null);
                return;
            }

            console.log("messages: ", res);
            result(null, res);
        }
        )
    }

    static getRandom(message: MessageInterface, result: (error: ErrorInterface | string | null, data: MessageInterface | null) => void) {
        db.all('SELECT * FROM messages', [], async (err: Error, res: MessageInterface[]) => {
            if (err) {
                result(err, null);
                return;
            }
            let rand = Math.floor(Math.random() * res.length)
            const randomMessage = res[rand];
            console.log("random message: ", randomMessage);
            result(null, randomMessage);
        }
        )
    }

    static newMessage(message: MessageInterface, result: (error: ErrorInterface | string | null, data: MessageInterface | null) => void) {
        try {
            db.run('INSERT INTO messages (body, likes, date) VALUES (?,?,?)', [message.body, 0, new Date().toISOString()], async (err: Error, res: MessageInterface) => {
                if(err){
                    result(err, null);
                    return;
                }
                console.log("New message added")
                result(null, res)
            });
        } catch (err) {
            console.log("error with creating msg")
            result("Error inserting into DB", null)
        }
    }
}

export default Message;