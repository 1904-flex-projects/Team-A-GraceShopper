import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Typewriter from 'typewriter-effect';

const itemArr = ['Barleywine', 'Brown Ale', 'Gose', 'Porter', 'And More!'];

const FrontBanner = () => {
  return (
    <Container maxWidth="md">
      <div id="front-container">
        <Typography variant="h2" color="inherit" gutterBottom>
          WELCOME TO THE BEEROCOMPLEX!
        </Typography>
        <Typography
          variant="h4"
          color="inherit"
          gutterBottom
          style={{ marginBottom: '2em' }}
        >
          YOU CAN GET ROWDY WITH SOME:
          <Typewriter
            options={{
              strings: itemArr,
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </div>
    </Container>
  );
};

export default FrontBanner;
