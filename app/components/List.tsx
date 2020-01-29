import React from 'react';
import { css } from 'emotion';

const List = ({ ...props }) => {
  const { content } = props;
  // const { activeCategory } = props;
  const contentArray: Object = Array.from(Object.values(content));

  return (
    <ul
      className={css`
        margin: 0;
        padding: 15px;
      `}
    >
      {Object.values(contentArray).map((item, index) => {
        return (
          <li
            key={index}
            className={css`
              display: block;
              font-weight: bold;
              font-size: 14px;
              padding: 4px 8px 3px 10px;
              width: 100%;
              margin-bottom: 7px;
              list-style: none;
              color: #355058;
              border-bottom: 2px solid #355058;
              &:last-child {
                border-bottom: none;
              }
              &:hover {
                background: #5c7e88;
                color: #fff;
                cursor: pointer;
                &:after {
                  content: '\00BB';
                  margin: 4px 8px;
                }
              }
            `}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
