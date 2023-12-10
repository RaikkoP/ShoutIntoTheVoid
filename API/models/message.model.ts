import db from "../utilities/database";

interface MessageInterface {
    body: string;
    likes: number;
    date: string;
    id: number;
};

interface ErrorInterface {
    message: string;
}

class Message {
    body: string;
    likes: number;
    date: string;
    id: number;

    constructor({body, likes, date, id}: MessageInterface) {
        this.body = body;
        this.likes = likes;
        this.date = date;
        this.id = id;
    }

    static getAll(message: MessageInterface, result: (error: ErrorInterface | string | null, data: MessageInterface | null) => void) {
        db.all('SELECT * FROM message', [], async(err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            message = res;
            console.log("messages: ", message);
            result(null, message);
            }
        )
    }
}

export default Message;