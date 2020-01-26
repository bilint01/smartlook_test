/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { css } from 'emotion';
import { Flex, Box } from '@rebass/grid';
import messages from './messages';

export default function HomePage() {
  return (
    <Flex>
      <Box width={1 / 1} px={2}>
        <h3
          className={css`
            color: #4f6779;
            font-size: 24px;
            margin: 8px;
            padding: 0;
          `}
        >
          {messages.header.defaultMessage}
        </h3>
      </Box>
    </Flex>
  );
}
