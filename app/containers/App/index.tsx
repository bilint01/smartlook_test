/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useContext } from 'react';
import { Flex, Link, Box } from 'rebass';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import fetchData from '../../helpers/requests';

const StyledLink = ({ props, children }) => (
  <Link
    sx={{
      color: '#fff',
      fontSize: '14px',
      padding: '2px 8px',
      textDecoration: 'none',
      '&:hover': {
        background: '#f7f8f3',
        color: '#3944f3',
      },
    }}
    variant={props}
    href="#!"
  >
    {props}
  </Link>
);

const App: React.FC = () => {
  const AppContext = React.createContext({});
  const state = useContext(AppContext);
  fetchData();

  return (
    <AppContext.Provider value={state}>
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
        <StyledLink props="users">Users</StyledLink>
        <StyledLink props="posts">Posts</StyledLink>
        <StyledLink props="comments">Comments</StyledLink>
      </Flex>
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default App;
