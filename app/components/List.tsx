import React from 'react';
import { Label } from '@rebass/forms';

const List = ({ ...props }) => {
  console.log(props);
  return (
    props.store.users !== undefined && (
      <Label>{JSON.stringify(set.store.users)}</Label>
    )
  );
};

export default List;
