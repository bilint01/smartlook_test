import React, { Fragment } from 'react';
import { css } from 'emotion';
import { Flex, Box } from '@rebass/grid';
import { User, Post, Comment } from '../helpers/responseTypes';

const Wrapper = ({ ...props }) => {
  const { store, person } = props;
  let { posts, comments, users } = store;

  // move posts into users object
  Object.values(users).map((user: User | any) => {
    user.posts = {};
    Object.values(posts).map((current: Post, count) => {
      if (user.posts && user.id === current.userId) {
        user.posts[count] = current;
      }
    });
  });

  const sharedHeaderStyle = css`
    background: #4f6779;
    padding: 4px 8px;
    margin: 0 -4px;
    color: #fff;
  `;

  return (
    <Flex flexWrap="wrap">
      <Box
        sx={{
          color: '#5c7e88',
          margin: '0 24px',
          fontFamily: 'Arial, sans-serif',
        }}
        width={[1, 1 / 2]}
        p={4}
      >
        <h3 className={sharedHeaderStyle}>Posts</h3>
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
          color: '#5c7e88',
          margin: '0 24px',
          fontFamily: 'Arial, sans-serif',
        }}
        width={[1, 1 / 2]}
        p={4}
      >
        <h3 className={sharedHeaderStyle}>Comments</h3>
        {Object.values(comments).map(
          (item: Comment, counter: number) =>
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
