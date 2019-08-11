import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../redux/reducers/product';
import { addProductToCart } from '../redux/reducers/cart';
import { FrontBanner, SingleProduct } from './index';
import { Grid } from '@material-ui/core';
import { FilterContainer } from './index';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, addToCart } = this.props;
    return (
      <div>
        <FrontBanner />
        <FilterContainer products={products} />
        <Grid container spacing={10} justify="center">
          {products.map(product => {
            const { supplier, category } = product;
            return (
              <Grid item key={product.id}>
                <SingleProduct
                  product={product}
                  supplier={supplier}
                  category={category}
                  addToCart={addToCart}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchAllProducts()),
    addToCart: product => dispatch(addProductToCart(product)),
  };
};

// proptypes to do typechecking
AllProducts.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
  addToCart: PropTypes.func,
};

const ConnectedAllProducts = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts);

export default ConnectedAllProducts;
