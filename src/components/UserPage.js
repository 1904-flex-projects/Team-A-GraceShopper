import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { Grid, Paper, Typography } from '@material-ui/core';

class UserPage extends React.Component {
  render() {
    const { loggedIn, loggedInUser } = this.props;
    console.log(this.props);
    return loggedIn ? (
      <Paper>
        <Grid container spacing={3}>
          {/* <ButtonBase>
              <img className={classes.img} alt='complex' src={product.imageUrl} />
            </ButtonBase> */}
          <Typography variation='h1'>
            HI THIS IS ACCOUNT MANAGEMENT FOR {loggedInUser.firstName}
          </Typography>
        </Grid>
      </Paper>
    ) : (
      <Redirect to='/login' />
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.users.loggedInUser,
  loggedIn: state.users.loggedIn
});

export default withRouter(connect(mapStateToProps)(UserPage));
