import React from 'react';
import { css } from 'emotion';

import List from './List';

const Wrapper = (category, active) => {
  console.log('category: ', category);
  if (active !== 'users') {
    return category && <List content={category} activeCategory={active} />;
  } else {
    return <p>ACTIVE CATEGORY USERS</p>;
  }
};

export default Wrapper;
