const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment')
// const Vote = require('./Vote'); in case future developments emerge, leaving this code here.

// Create associations for models
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
}); 

User.hasMany(Comment, {
    foreignKey: 'user_id'
});


module.exports = { User, Post, Comment };