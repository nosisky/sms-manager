
const dotenv = require('dotenv');

dotenv.load();

module.exports = {
  development: {
    username: 'andeladeveloper',
    password: '',
    database: 'sms-api',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    use_env_variable: 'DATABASE_TEST_URL',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
