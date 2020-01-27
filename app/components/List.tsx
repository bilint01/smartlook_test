import React from 'react';
import { Label } from '@rebass/forms';

const List = ({ ...props }) => {
  const { data } = props;
  const set = data.getState();
  console.log('store: ', set);
  return (
    set.store.users !== undefined && (
      <Label>{JSON.stringify(set.store.users)}</Label>
    )
  );
};

export default List;
