import db from "../utilities/database";

interface MessageInterface {
    message: string;
    likes: number;
    date: string;
    id: number;
};

interface ErrorInterface {
    message: string;
}

class Message {
    message: string;
    likes: number;
    date: string;

    constructor({message, likes, date}: MessageInterface) {
        this.message = message;
        this.likes = likes;
        this.date = date;
    }
}

export default Message;