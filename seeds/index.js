const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Syncing');
  await seedUsers();
  console.log('Users seeded!');

  await seedPosts();
  console.log('Posts seeded!');

  await seedComments();
  console.log('Comments seeded!');

  await seedVotes();
  console.log('Votes seeded!');

  process.exit(0);
};

seedAll();