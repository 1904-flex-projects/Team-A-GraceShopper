import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/reducers/product';
import { postOrder } from '../redux/reducers/order';
import { FrontBanner, SingleProductOnAllProducts } from './index';
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
              <SingleProductOnAllProducts
                key={product.id}
                product={product}
                supplier={supplier}
                category={category}
                addToCart={addToCart}
              />
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
    fetchProducts: () => dispatch(fetchProducts()),
    addToCart: order => dispatch(postOrder(order)),
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
