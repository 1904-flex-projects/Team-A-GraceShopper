import React from 'react';
import { connect } from 'react-redux';
import { postSignup } from '../redux/reducers/user';
import { convertEmptyToNull } from '../../utils';
import { FormCreator } from './index';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phone: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.postSignup(convertEmptyToNull(this.state));
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipCode: '',
      phone: ''
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
      formTitle: 'Sign Up',
      formType: 'Sign Up',
      fields: [
        {
          name: 'firstName',
          label: 'First Name',
          required: true
        },
        {
          name: 'lastName',
          label: 'Last Name',
          required: true
        },
        {
          name: 'address1',
          label: 'Address Line 1'
        },
        {
          name: 'address2',
          label: 'Address Line 2'
        },
        {
          name: 'city',
          label: 'City'
        },
        {
          name: 'state',
          label: 'State'
        },
        {
          name: 'zipcode',
          label: 'Zip Code'
        },
        {
          name: 'country',
          label: 'Country'
        },
        {
          name: 'phone',
          label: 'Phone'
        },
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
  postSignup: user => {
    dispatch(postSignup(user, ownProps.history));
  }
});

const ConnectedSignUp = connect(
  null,
  mapDispatchToProps
)(SignUp);

export default ConnectedSignUp;
