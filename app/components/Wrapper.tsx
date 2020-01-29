import React from 'react';
import { css } from 'emotion';

import List from './List';

const Wrapper = (category, active) => {
  console.log(category);
  return category && <List content={category} activeCategory={active} />;
};

export default Wrapper;
