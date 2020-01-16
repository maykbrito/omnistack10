import React from 'react';

import Header from './Header'

export default function Content(props) {
  return (
    <>
      <Header>{props.title}</Header>
      <div>
        {props.children}
      </div>
    </>
  );
}
