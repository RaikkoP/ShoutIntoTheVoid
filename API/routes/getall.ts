import express from 'express';
const router = express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.text());
import messageController from '../controllers/message.get';

router.get('/', messageController.getAllMessages);

export default router;