const { Comment } = require('../models');

const comment_data = [
  {
    comment_text: 'I want to be a software developer.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I love going bowling.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'I love JavaScript.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'I love JQuery and Bootstrap.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'I love Node.js and Express.js.',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'I love API fetch calls and responses.',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'I love CSS and Document Object Module manipulation.',
    user_id: 7,
    post_id: 7
  }

];

const seedComments = () => Comment.bulkCreate(comment_data);

module.exports = seedComments;