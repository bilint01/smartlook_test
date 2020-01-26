import { User, Post, Comment } from './responseTypes';

const axios = require('axios').default;

const fetchData = async () => {
  await axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/users', Users),
      axios.get('https://jsonplaceholder.typicode.com/posts', Posts),
      axios.get('https://jsonplaceholder.typicode.com/comments', Comments),
    ])
    .then(
      axios.spread((usersResponse, postsResponse, commentsResponse) => {
        console.log(usersResponse, postsResponse, commentsResponse);
      }),
    );
};

export default fetchData;
