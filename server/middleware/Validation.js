/* eslint-disable consistent-return */
const Validation = {

  /**
 * Checks if user id is supplied
 *
 * @param {Object} req - request
 *
 * @param {Object} res - response
 *
 * @param {Function} next - Call back function
 *
 * @returns { Object } - containing error message
 */
  checkUserId(req, res, next) {
    const querier = req.params.contactId;
    if (!querier) {
      return res.status(400).send({
        message: 'Sender or receiver ID is required',
      });
    }
    next();
  },

  /**
   *
   * @description - Validates User Input when adding a new user
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   *
   * @param {Object} next - call back function
   *
   * @returns {Object} - Object containing error message
   */
  checkUserInput(req, res, next) {
    req.checkBody({
      name: {
        notEmpty: true,
        errorMessage: 'Name is required!',
      },
      phoneNumber: {
        notEmpty: true,
        errorMessage: 'Phone number is required',
      },
    });
    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        const errorMessage = error.msg;
        allErrors.push(errorMessage);
      });
      return res.status(400).json({
        message: allErrors[0],
      });
    }
    const { name, phoneNumber } = req.body;

    req.userData = {
      name,
      phoneNumber,
    };
    next();
  },

  /**
   *
   * @description - Validates SMS Input when sending a new message
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   *
   * @param {Object} next - call back function
   *
   * @returns {Object} - Object containing error message
   */
  checkSmsInput(req, res, next) {
    req.checkBody({
      message: {
        notEmpty: true,
        errorMessage: 'Message is required!',
      },
      senderId: {
        notEmpty: true,
        errorMessage: 'SenderId is required',
      },
      receiverId: {
        notEmpty: true,
        errorMessage: 'receiverId is required',
      },
    });
    const errors = req.validationErrors();
    if (errors) {
      const allErrors = [];
      errors.forEach((error) => {
        const errorMessage = error.msg;
        allErrors.push(errorMessage);
      });
      return res.status(400).json({
        message: allErrors[0],
      });
    }
    const { message, senderId, receiverId } = req.body;

    req.messageData = {
      message,
      senderId,
      receiverId,
    };
    next();
  },
};

export default Validation;
