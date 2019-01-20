import dotenv from 'dotenv';

import database from '../models';

dotenv.load();

const { users } = database;

const UserController = {

  /**
   * @description - Adds a new user to the database
   *
   * @param  {object} req - request object
   *
   * @param  {object} res - response object
   *
   * @return {Object} - Object containing user detail
   *
   * Route: POST: /contacts
   */
  createContact(req, res) {
    return users.create(req.userData)
      .then(user => res.status(201).send({
        message: 'User contact created successfully!',
        user: user.dataValues,
      }))
      .catch(error => res.status(500).send(error.errors));
  },


  /**
   * @description - Delete contact from the database
   *
   * @param  {Object} req - request
   *
   * @param  {Object} res - reponse
   *
   * @returns {Object} - returns success message
   *
   * Route: DELETE: /contacts/:contactId
   *
   */
  deleteContact(req, res) {
    return users.destroy({
      where: {
        id: req.params.contactId,
      },
    })
      .then(() => {
        res.status(200).send({
          message: 'Contact deleted successfully!',
        });
      })
      .catch(error => res.status(500).send(error));
  },
};

export default UserController;
