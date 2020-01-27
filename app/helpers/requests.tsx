const axios = require('axios').default;

const fetchData = async (): Promise<any> =>
  await axios
    .all([
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/comments'),
    ])
    .then(responseData => responseData);

export default fetchData;
