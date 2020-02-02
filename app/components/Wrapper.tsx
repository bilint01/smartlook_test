import React, { Fragment } from 'react';
import { css } from 'emotion';
import { Flex, Box, Heading } from 'rebass';

const Wrapper = ({ ...props }) => {
  const { store, person } = props;
  const { posts, comments } = store;

  const sharedHeaderStyle = css`
    background: #4f6779;
    padding: 4px 8px;
    margin: 16px -4px;
    color: #fff;
  `;

  return (
    <Flex>
      <Box
        sx={{
          color: '#5c7e88',
          margin: '0 24px',
          fontFamily: 'Arial, sans-serif',
        }}
        width={[1 / 2]}
        p={1}
        mx="left"
      >
        <h2 className={sharedHeaderStyle}>Posts</h2>
        {Object.values(posts).map(
          (item: any, counter: number) =>
            item.userId == person && (
              <Fragment key={counter}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </Fragment>
            ),
        )}
      </Box>
      <Box
        sx={{
          borderRight: '10px solid #d8e4ec',
          paddingRsight: '20px',
        }}
      />
      <Box
        sx={{
          color: '#5c7e88',
          margin: '0 24px',
          fontFamily: 'Arial, sans-serif',
        }}
        width={[1 / 2]}
        p={1}
        mx="right"
      >
        <h2 className={sharedHeaderStyle}>Comments</h2>
        {Object.values(comments).map(
          (item: any, counter: number) =>
            item.postId == person && (
              <Fragment key={counter}>
                <h4>{item.name}</h4>
                <p>{item.body}</p>
              </Fragment>
            ),
        )}
      </Box>
    </Flex>
  );
};

export default Wrapper;
