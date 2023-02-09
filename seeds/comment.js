const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "As someone who just got into this, this is really insightful!",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "I'm not sure I understand the relevance..",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text:
      "great job,keep up the good work,post more stuff like this pls",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text:
      "You've explained this way better conceptually than my teacher, subbed",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: "You hit the nail on the head",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Hey can you link us some starter code for this??",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "lol I remember my first code",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text: "noob",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
