import React, { Fragment } from 'react';
import { css } from 'emotion';
import { Flex, Box } from '@rebass/grid';
import { User, Post, Comment } from '../helpers/responseTypes';

const Wrapper = ({ ...props }) => {
  const { store, post } = props;
  let { comments, users } = store;

  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={4}>
        {Object.values(users).map(
          (item: User, counter: number) =>
            item.id == post && (
              <div
                key={counter}
                className={css`
                  padding: 0 8px;
                  color: #5c7e88;
                `}
              >
                <h3
                  className={css`
                    background: #4f6779;
                    padding: 4px 8px;
                    margin: 0 -4px;
                    color: #fff;
                  `}
                >
                  {item.name}
                </h3>
                <p>username: {item.username}</p>
                <p>company: {item.company.name}</p>
                <p>email: {item.email}</p>
                <p>web: {item.website}</p>
                <ul>
                  <b
                    className={css`
                      color: #4f6779;
                      border-bottom: 1px solid;
                    `}
                  >
                    address:
                  </b>
                  <li>street: {item.address.street}</li>
                  <li>suite: {item.address.suite}</li>
                  <li>city: {item.address.city}</li>
                  <li>zipcode: {item.address.zipcode}</li>
                  <li>
                    geo: {item.address.geo.lat}, {item.address.geo.lng}
                  </li>
                </ul>
              </div>
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
        <h3
          className={css`
            background: #4f6779;
            padding: 4px 8px;
            margin: 0 -4px;
            color: #fff;
          `}
        >
          Comments
        </h3>
        {Object.values(comments).map(
          (item: Comment, counter: number) =>
            item.postId == post && (
              <div key={counter}>
                <h4>{item.name}</h4>
                <p>{item.postId}</p>
                <p>{item.email}</p>
                <p>{item.body}</p>
              </div>
            ),
        )}
      </Box>
    </Flex>
  );
};

export default Wrapper;
