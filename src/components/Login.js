import React from 'react';
import PropTypes from 'prop-types';
import { postLogin } from '../redux/reducers/user';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { convertEmptyToNull } from '../../utils';
import { FormCreator } from './index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.postLogin(convertEmptyToNull(this.state));
    this.setState({
      email: '',
      password: ''
    });
    this.props.history.push('/products');
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const formProps = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      formTitle: 'Login',
      formType: 'Login',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          required: true
        },
        {
          name: 'password',
          type: 'password',
          label: 'Password',
          required: true
        }
      ]
    };
    return <FormCreator formProps={formProps} />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  postLogin: user => {
    dispatch(postLogin(user, ownProps.history));
  }
});

const ConnectedLogin = connect(
  null,
  mapDispatchToProps
)(Login);

export default withRouter(ConnectedLogin);
