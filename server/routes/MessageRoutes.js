import express from 'express';

import Validation from '../middleware/Validation';

import MessageController from '../controllers/MessageController';

const { checkSmsInput, checkUserId } = Validation;

const { send, getContactMessages, deleteMessage } = MessageController;

const MessageRouter = express.Router();

MessageRouter.route('/message')
  .post(checkSmsInput, send);

MessageRouter.route('/message/:contactId')
  .get(checkUserId, getContactMessages)
  .delete(checkUserId, deleteMessage);

export default MessageRouter;
