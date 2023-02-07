const { User } = require("../models");

const userData = [
  {
    username: "Sal",
    email: "salgoodman@hotmail.com",
    password: "password123",
  },
  {
    username: "Lernantino",
    email: "lernantino@gmail.com",
    password: "password123",
  },
  {
    username: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password123",
  },
  {
    username: "Kyle",
    email: "kpfranklin22gmail.com",
    password: "admin123",
  },
  {
    username: "Hugh",
    email: "HMannity@gmail.com",
    password: "password321",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
