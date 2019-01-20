import express from 'express';

import Validation from '../middleware/Validation';

import UserController from '../controllers/UserController';

const { checkUserInput, checkUserId } = Validation;

const { createContact, deleteContact } = UserController;

const userRouter = express.Router();

userRouter.route('/contact')
  .post(checkUserInput, createContact);

userRouter.route('/contact/:contactId')
  .delete(checkUserId, deleteContact);

export default userRouter;
