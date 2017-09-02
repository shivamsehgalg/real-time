/* global window fetch */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import ContentSend from 'material-ui/svg-icons/content/send';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../img/test-logo.png';
import AuthButtons from './authButton';

import '../css/base.css';

import myConfig from '../config';


class Base extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, networkId: 0, preLevel: null, accessLevel: null };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
//    this.getUserNetwork = this.getUserNetwork.bind(this);
  }





  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: true });
  }


  render() {
    function handleTouchTap() {
      window.location.assign('/');
    }

    const styles = {
      title: {
        cursor: 'pointer',
        float: 'left',
      },
    };


    return (


      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title={<span style={styles.title}>
              <img src={logo} className="imglogo" alt="logo" />
            </span>}
            onTitleTouchTap={handleTouchTap}
            iconElementRight={<AuthButtons />}
            className="bgTheme"
            onLeftIconButtonTouchTap={this.handleToggle}
          />

          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={open => this.setState({ open })}
          >
            <List>
              <Subheader />
              <ListItem primaryText="Home" href="" leftIcon={<ContentSend />} />
              <ListItem primaryText="About us" href="" leftIcon={<ContentSend />} />
              <ListItem primaryText="Contact us" href="" leftIcon={<ContentSend />} />
              <ListItem primaryText="Privacy" href="" leftIcon={<ContentSend />} />


            </List>
          </Drawer>

        </div>
      </MuiThemeProvider>


    );
  }
}

export default Base;
