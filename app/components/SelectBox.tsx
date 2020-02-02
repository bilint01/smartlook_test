import React from 'react';
import { Select } from '@rebass/forms';
import { Box } from 'rebass';

const SelectBox = ({ list, select }) => {
  if (Object.values(list).length === 0) {
    return <p>Data is not ready yet.</p>;
  }

  return (
    <Box
      sx={{
        color: '#5c7e88',
        margin: '14px 27px',
      }}
    >
      <Select
        sx={{
          borderColor: '#5c7e88',
          color: '#355058',
          fontSize: '14px',
          outline: 'none',
          borderRadius: '4px',
          padding: '6px 17px',
        }}
        id="names"
        name="names"
        defaultValue="select name"
        onChange={select}
      >
        {Object.values(list).map((item: any, index) => (
          <option key={index} value={item.id}>
            {item.name || item.title}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectBox;
