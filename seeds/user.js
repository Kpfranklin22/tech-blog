const { User } = require('../models');

const userData =
[
    {
        "name": "Sal",
        "email": "salgoodman@hotmail.com",
        "password": "password123"
      },
      {
        "name": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password123"
      },
      {
        "name": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "password123"
      },
      {
        "name": "Kyle",
        "email": "kpfranklin22gmail.com",
        "password": "admin123"
      },
      {
        "name": "Hugh",
        "email": "HMannity@gmail.com",
        "password": "password321"
      }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;