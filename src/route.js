// Main route component


import React, { PropTypes } from 'react';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Base from './js/base';
import userDetails from './js/userDetail';

import NotFound from './js/404';


injectTapEventPlugin();


// const NotFound = <h1>404.. This page is not found!</h1>;

const Container = props => (
  <div>
    <Base />
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.shape({}),
};
Container.defaultProps = { children: '' };

const App = React.createClass({

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container} >
          <IndexRoute component={userDetails} />

          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  },
});

// App.propTypes = {
//  children: PropTypes.string.isRequired,
// };

export default App;

