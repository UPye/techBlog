const { User } = require('../models');

const userData = [
  {
    username: "QueenB",
    email: "QueenB@gmail.com",
    password: "test"
  },
  {
    username: "UnderDog",
    email: "UnderDog@gmail.com",
    password: "test"
  },
  {
    username: "BatMan",
    email: "BatMan@gmail.com",
    password: "test"
  },
  {
    username: "SpiderMan",
    email: "SpiderMan@gmail.com",
    password: "test"
  },
  {
    username: "SuperMan",
    email: "SuperMan@gmail.com",
    password: "test"
  },
  {
    username: "WonderWoman",
    email: "WonderWoman@gmail.com",
    password: "test"
  },
  {
    username: "HarleyQuinn",
    email: "HarleyQuinn@gmail.com",
    password: "test"
  }
];

const seedUsers = () => User.bulkCreate(userData);



//  WARNING these passwords will not be hashed, and must be hashed via update route before login route will function!
module.exports = seedUsers;