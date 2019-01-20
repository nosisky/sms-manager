module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.messages, {
      foreignKey: 'receiverId',
      onDelete: 'CASCADE',
    });
    Users.hasMany(models.messages, {
      foreignKey: 'senderId',
      onDelete: 'CASCADE',
    });
  };
  return Users;
};
