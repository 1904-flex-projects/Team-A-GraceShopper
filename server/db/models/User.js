const Sequelize = require('sequelize');
const db = require('../connection');

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  type: {
    type: Sequelize.ENUM(['guest', 'registered']),
    defaultValue: 'guest',
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  addressLine1: {
    type: Sequelize.STRING,
  },
  addressLine2: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: Sequelize.ENUM([
      'AK - Alaska',
      'AL - Alabama',
      'AR - Arkansas',
      'AS - American Samoa',
      'AZ - Arizona',
      'CA - California',
      'CO - Colorado',
      'CT - Connecticut',
      'DC - District of Columbia',
      'DE - Delaware',
      'FL - Florida',
      'GA - Georgia',
      'GU - Guam',
      'HI - Hawaii',
      'IA - Iowa',
      'ID - Idaho',
      'IL - Illinois',
      'IN - Indiana',
      'KS - Kansas',
      'KY - Kentucky',
      'LA - Louisiana',
      'MA - Massachusetts',
      'MD - Maryland',
      'ME - Maine',
      'MI - Michigan',
      'MN - Minnesota',
      'MO - Missouri',
      'MS - Mississippi',
      'MT - Montana',
      'NC - North Carolina',
      'ND - North Dakota',
      'NE - Nebraska',
      'NH - New Hampshire',
      'NJ - New Jersey',
      'NM - New Mexico',
      'NV - Nevada',
      'NY - New York',
      'OH - Ohio',
      'OK - Oklahoma',
      'OR - Oregon',
      'PA - Pennsylvania',
      'PR - Puerto Rico',
      'RI - Rhode Island',
      'SC - South Carolina',
      'SD - South Dakota',
      'TN - Tennessee',
      'TX - Texas',
      'UT - Utah',
      'VA - Virginia',
      'VI - Virgin Islands',
      'VT - Vermont',
      'WA - Washington',
      'WI - Wisconsin',
      'WV - West Virginia',
      'WY - Wyoming',
    ]),
  },
  zipCode: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isNumeric: true,
      len: [5, 5],
    },
  },
  country: {
    type: Sequelize.ENUM(['United States of America']),
  },
  phone: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      len: [7, 11],
      isNumeric: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      len: [8, 24],
    },
  },
});

module.exports = User;
