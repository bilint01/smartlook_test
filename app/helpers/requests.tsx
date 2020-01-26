import { User, Post, Comment } from './responseTypes';

const axios = require('axios').default;

const fetchData = async (): Promise<boolean> =>
  await axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/comments'),
    ])
    .then(
      axios.spread(
        (
          usersResponse: User,
          postsResponse: Post,
          commentsResponse: Comment,
        ) => ({
          users: usersResponse,
          posts: postsResponse,
          comments: commentsResponse,
        }),
      ),
    );

export default fetchData;
