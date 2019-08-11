import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { truncate } from '../../utils';

// for the truncating
const HEIGHT_WRAP = 100;

const styles = makeStyles({
  root: {
    maxWidth: '350px',
    margin: '1em',
    boxSizing: 'border-box',
  },
  media: {
    height: '200px',
  },
  spacing: {
    margin: '1em',
  },
  desc: {
    textOverflow: 'ellipses',
    overflow: 'hidden',
    margin: '1em',
    height: '100px',
    wordWrap: 'break-word',
  },
});

const SingleProductOnAllProducts = (props) => {
    let descWrapped;
    const { product, addToCart } = props;
    const { supplier, category } = product;
    product.description ? descWrapped = truncate(product.description, HEIGHT_WRAP)
    : descWrapped = null;
    const classes = styles();
    return (
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <Card className={classes.root}>
          <CardHeader title={product.name} subheader={category.name} />
          <CardMedia image={product.imageUrl} className={classes.media} />
          <CardContent>
            <Typography variant="body2" className={classes.desc}>
              {descWrapped}
            </Typography>
            <Typography variant="subtitle1">Price: ${product.price}</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
              Brewery: {supplier.name}
            </Typography>
  
            <Fab
              size="small"
              color="secondary"
              aria-label="add"
              onClick={() => {
                addToCart({orderProducts: [{product, quantity: 1}]});
              }}
            >
              <AddIcon />
            </Fab>
          </CardContent>
        </Card>
      </Link>
    );
}

// proptypes to do typechecking
SingleProductOnAllProducts.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};

export default SingleProductOnAllProducts;
