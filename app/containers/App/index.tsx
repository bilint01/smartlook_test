/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState, Fragment } from 'react';
import { Provider, useDispatch, useStore } from 'react-redux';
import { Flex, Box } from 'rebass';
import { Switch, Route } from 'react-router-dom';
import get from 'lodash/get';
import ActionTypes from '../Provider/constants';
import { User, Post, Comment } from '../../helpers/responseTypes';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import fetchData from '../../helpers/requests';
import StyledLink from '../../components/StyledLink';
import List from '../../components/List';

const initState = {
  activeSection: 'users',
};

const App: React.FC = () => {
  // state of selected section
  let [section, selectSection] = useState({ ...initState });

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

  return (
    <Provider store={dataStore}>
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
      {category && <List content={category} activeCategory={section} />}
      <GlobalStyle />
    </Provider>
  );
};

export default App;
