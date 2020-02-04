/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from 'emotion';
import { Flex, Box } from 'rebass';
import { Switch, Route } from 'react-router-dom';
import get from 'lodash/get';
import ActionTypes from '../Provider/constants';
import { User, Post, Comment } from '../../helpers/responseTypes';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import fetchData from '../../helpers/requests';

import Wrapper from '../../components/Wrapper';
import SelectBox from '../../components/SelectBox';

const App: React.FC = () => {
  // state of selected section
  let [section, selectSection] = useState('users');
  let [activePerson, handleName] = useState(1);
  const dispatch = useDispatch();
  const data:
    | { store: object; language: object; router: object }
    | any = useSelector(state => state);
  let category: User | Post | Comment = get(data, `store[${section}]`);

  // fetching data and distributing into redux store
  useEffect(() => {
    fetchData().then(responses => {
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
      });
    });
  }, []);

  const handleSelectName = event => {
    let eventType = event.target;
    handleName(() => (activePerson = eventType.value));
  };

  return (
    <Fragment>
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
      </Flex>
      {section === 'users' && (
        <SelectBox list={category} select={handleSelectName} />
      )}
      {data.store.comments ? (
        <Flex
          px={1}
          sx={{
            background: '#F6F9FC',
          }}
        >
          <Wrapper {...data} person={activePerson} />
        </Flex>
      ) : (
        <p
          className={css`
            color: #5c7e88;
            margin: 24px;
            font-family: Arial, sans-serif;
          `}
        >
          ...Loading
        </p>
      )}
      <GlobalStyle />
    </Fragment>
  );
};

export default App;
