import React from 'react';
import { connect } from 'react-redux';
import { CartFunctional } from './index';

class Cart extends React.Component {
  //   componentDidMount() {
  //     // get the cart items upon mount
  //     console.log(this.props);
  //   }
  render() {
    const { cart } = this.props;
    return <CartFunctional cart={cart} />;
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
