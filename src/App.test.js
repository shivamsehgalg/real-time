/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './route';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
