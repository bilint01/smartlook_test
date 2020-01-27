import React from 'react';
import { Link } from 'rebass';

const StyledLink = ({ props, children, stateAction }) => (
  <Link
    onClick={() => stateAction(props)}
    sx={{
      color: '#fff',
      fontSize: '14px',
      marginLeft: '14px',
      padding: '2px 8px',
      textDecoration: 'none',
      '&:hover': {
        background: '#f7f8f3',
        color: '#5c7e88',
        textDecoration: 'underline',
      },
    }}
    variant={props}
    href="#!"
  >
    {children}
  </Link>
);

export default StyledLink;
