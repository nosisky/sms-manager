module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('messages', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'sent',
    },
  });

  Messages.associate = (models) => {
    Messages.belongsTo(models.users, {
      foreignKey: 'senderId',
    });
    Messages.belongsTo(models.users, {
      foreignKey: 'receiverId',
    });
  };
  return Messages;
};
