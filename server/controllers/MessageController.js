import database from '../models';

const { messages } = database;

const MessageController = {
  /**
   * @description - Send SMS
   *
   * @param  {object} req - request
   *
   * @param  {object} res - response
   *
   * @return {Object} - Object containing status code and success message
   *
   * Route: POST: /sms/send
   *
   */
  send(req, res) {
    return messages.create(req.messageData)
      .then(data => res.status(201).send({
        message: 'Message sent successfully',
        data,
      }))
      .catch(error => res.status(500).send(error));
  },

  /**
   * @description - Retrieves contact message history
   *
   * @param  {object} req - request
   *
   * @param  {object} res - response
   *
   * @return {Object} - Object containing status code and success message
   *
   * Route: POST: /sms/:contactId
   *
   */
  getContactMessages(req, res) {
    return messages.findAll({
      where: {
        $or: [
          {
            receiverId:
              {
                $eq: req.params.contactId,
              },
          },
          {
            senderId:
              {
                $eq: req.params.contactId,
              },
          },
        ],
      },
    })
      .then(data => res.status(201).send({
        data,
      }))
      .catch(error => res.status(500).send(error));
  },

  /**
   * @description - Delete message
   *
   * @param  {Object} req - request
   *
   * @param  {Object} res - reponse
   *
   * @returns {Object} - returns success message
   *
   * Route: DELETE: /message/:contactId
   *
   */
  deleteMessage(req, res) {
    return messages.destroy({
      where: {
        id: req.params.contactId,
      },
    })
      .then(() => {
        res.status(200).send({
          message: 'Message deleted successfully!',
        });
      })
      .catch(error => res.status(500).send(error));
  },
};

export default MessageController;
