const { Post } = require('../models');

const postdata = [
  {
    title: 'React is one of the best coding languages.',
    post_text: 'React is TOTALLY the future!',
    user_id: 7
  },
  {
    title: 'GraphQL is SUPER hard to learn.',
    post_text: 'Does anyone have suggestions or tips about GraphQL?',
    user_id: 8
  },
  {
    title: 'Hey, does anyone need JavaScript tutoring?',
    post_text: 'If so my rates are on my profile page. Contact me for assistance.',
    user_id: 1
  },
  {
    title: 'Have you ever.... ?',
    post_text: 'Dreamed of how to resolve a bug, AND IT WORKED?!?',
    user_id: 4
  },
  {
    title: 'I REALLY could use help with CSS Grids.',
    post_text: 'Anyone available to assist? If so, what are your rates?',
    user_id: 7
  },
  {
    title: 'Can we sell services on this website?',
    post_text: 'If so, what all payment methods can we accept?',
    user_id: 4
  },
  {
    title: 'This is DEFINITELY a great release. 😏',
    post_text: 'No one understands my borderline insomnia the way you all do! 😂',
    user_id: 1
  },
  {
    title: 'When you get a bug in your code.',
    post_text: 'One second, I am still troubleshooting the bug.',
    user_id: 7
  },
  {
    title: 'When your code works on the first try.',
    post_text: 'Paranoid thoughts of a sudden bug appearing begins NOW!',
    user_id: 8
  },
  {
    title: 'When you come up with an intricate coding idea.',
    post_text: 'No one wants to help because it is too intricate.',
    user_id: 1
  },
  {
    title: 'When you see your API calls working.',
    post_text: 'You keep doing more, and then run out before deploying the site.',
    user_id: 4
  },
  {
    title: 'When you have a coding project to complete.',
    post_text: 'BRING ON ALL THE REDBULL I CAN PHYSICALLY HANDLE because I WILL be up for DAYS!',
    user_id: 7
  },
  {
    title: 'When you found out HTML was barely scratching the surface of coding.',
    post_text: 'DOM manipulation, WHAT IS THAT?!? So you are telling me my websites are not really websites?!?',
    user_id: 4
  },
  {
    title: 'When you first did an animation using JavaScript.',
    post_text: 'Oh yeah, I am TOTALLY a SOFTWARE ENGINEER!',
    user_id: 1
  }
 
];

const seedPosts = () => Post.bulkCreate(postdata);


module.exports = seedPosts;