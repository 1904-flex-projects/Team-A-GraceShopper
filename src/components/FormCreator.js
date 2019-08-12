import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import theme from '../themes';

// for linter if you want to include apostraphe or some quoate need to use this
const APOS = '&apos';

const styles = makeStyles({
  body: {
    backgroundColor: theme.palette.common.white
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

const FormCreator = props => {
  const {
    fields,
    formTitle,
    handleSubmit,
    handleChange,
    formType
  } = props.formProps;
  const classes = styles();
  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          {formTitle}
        </Typography>
      </div>
      <form className={classes.form} onSubmit={e => handleSubmit(e)}>
        <Grid container spacing={2}>
          {fields.map((field, id) => {
            return (
              <Grid key={id + field.name} item xs={12}>
                <TextField
                  variant='outlined'
                  autoComplete=''
                  fullWidth
                  required={field.required}
                  name={field.name}
                  type={field.type}
                  label={field.label}
                  onChange={handleChange}
                />
              </Grid>
            );
          })}
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='secondary'
          className={classes.submit}
        >
          Submit
        </Button>
      </form>

      {/* specific footer for login and signup otherwise don't need anything */}
      {formType === 'Login' || formType === 'Sign Up' ? (
        <Grid container justify='flex-end'>
          <Grid item>
            <Link href='/signup' variant='body2'>
              {formType === 'Login'
                ? `Don't have an account? Sign Up`
                : 'Already have an account? Log In'}
            </Link>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </Container>
  );
};

export default FormCreator;
