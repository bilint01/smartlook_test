/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { css } from 'emotion';
import { Flex, Box } from 'rebass';
import { Select } from '@rebass/forms';
import { Switch, Route } from 'react-router-dom';
import get from 'lodash/get';
import ActionTypes from '../Provider/constants';
import { User, Post, Comment } from '../../helpers/responseTypes';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import fetchData from '../../helpers/requests';
import StyledLink from '../../components/StyledLink';
import Wrapper from '../../components/Wrapper';

const initState = {
  activeSection: 'users',
  selectedName: '',
};

const App: React.FC = () => {
  // state of selected section
  let [section, selectSection] = useState({ initState });
  let [selectedName, handleName] = useState({ initState });

  // detching data and distributing into redux store
  const dispatch = useDispatch();
  const dataStore = useStore();
  const dataContent = dataStore.getState();
  const category: User | Post | Comment = get(dataContent, `store[${section}]`);

  fetchData().then(responses =>
    responses.map((response, count) => {
      if (count === 0) {
        dispatch({
          type: ActionTypes.STORE_USERS,
          payload: { ...response.data },
        });
      } else if (count === 1) {
        dispatch({
          type: ActionTypes.STORE_POSTS,
          payload: { ...response.data },
        });
      } else if (count === 2) {
        dispatch({
          type: ActionTypes.STORE_COMMENTS,
          payload: { ...response.data },
        });
      }
    }),
  );

  const handleSelectName = event => {
    const eventType = event.target;
    handleName(() => (selectedName = eventType.value));
  };

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Flex
        px={1}
        sx={{
          background: '#5c7e88',
        }}
      >
        <Box mx="left" />
        <StyledLink props="users" stateAction={selectSection}>
          Users
        </StyledLink>
        <StyledLink props="posts" stateAction={selectSection}>
          Posts
        </StyledLink>
        <StyledLink props="comments" stateAction={selectSection}>
          Comments
        </StyledLink>
      </Flex>
      {category && (
        <Box
          sx={{
            color: '#5c7e88',
            margin: '14px',
          }}
        >
          <Select
            sx={{
              borderColor: '#5c7e88',
              color: '#355058',
              fontSize: '14px',
              outline: 'none',
              borderRadius: '4px',
            }}
            id="names"
            name="names"
            defaultValue="select name"
            onChange={handleSelectName}
          >
            {Object.values(category).map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      )}
      {section && category ? (
        <Wrapper active={section} category={category} />
      ) : (
        <p
          className={css`
            color: #5c7e88;
            margin: 24px;
            font-family: Arial, sans-serif;
          `}
        >
          Here you can view data related to user by his/her name.
        </p>
      )}
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
