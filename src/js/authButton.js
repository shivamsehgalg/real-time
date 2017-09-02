/* global fetch window localStorage */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import { fullWhite } from 'material-ui/styles/colors';
import logOutImg from '../img/logout.svg';
import myConfig from '../config';

const styles = {
  mt7: {
    padding: '6px',
  },
  Clr: {
    color: 'white',
    fontSize: '14px',
    marginLeft: '6px',
    marginRight: '6px',
  },
};

class AuthButtons extends React.Component {
  constructor(props) {
    super(props);


    this.state = { loginedUser: {username:'Admin'} };


  }



  render() {
    return (
      <div style={styles.mt7}>

        <FlatButton
          labelPosition="before"
          style={styles.Clr}
          // primary={true}
          icon={<AccountCircle />}
          color={fullWhite}
        > {this.state.loginedUser.username}</FlatButton>
        <FlatButton
          labelPosition="before"
          style={styles.Clr}
          // primary={true}

          icon={<img className="h24 w24" alt="logout" src={logOutImg} />}
          color={fullWhite}
        > Logout</FlatButton>

      </div>

    );
  }

}

export default AuthButtons;

// export default AuthButtons;
