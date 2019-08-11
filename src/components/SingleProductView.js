import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../redux/reducers/product';
import { SPVFunctional } from './index';
import { postOrder } from '../redux/reducers/order';
import PropTypes from 'prop-types';

class SingleProductView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
  }
  render() {
    const { product, addToCart } = this.props;
    return product ? <SPVFunctional product={product} addToCart={addToCart} /> : <div />;
  }
}

// proptypes to do typechecking
SingleProductView.propTypes = {
  match: PropTypes.object,
  product: PropTypes.object,
  fetchProduct: PropTypes.func,
  addToCart: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    product: state.products.product,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: order => dispatch(postOrder(order)),
    fetchProduct: id => dispatch(fetchProduct(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductView);
