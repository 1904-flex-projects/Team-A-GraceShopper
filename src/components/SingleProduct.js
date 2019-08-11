import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
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
    maxWidth: '370px',
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

const SingleProduct = props => {
  const { product, supplier, category, addToCart } = props;
  const descWrapped = truncate(product.description, HEIGHT_WRAP);
  const classes = styles();
  return (
    <Card className={classes.root}>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <CardHeader title={product.name} subheader={category.name} />
        <CardMedia image={product.imageUrl} className={classes.media} />
      </Link>
      <CardContent>
        {/* <li>
            <img src={product.imageUrl} className="product-image" />
          </li> */}
        <Typography variant="body2" className={classes.desc}>
          {descWrapped}
        </Typography>
        <Typography variant="subtitle1">Price: ${product.price}</Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '5px' }}>
          Brewery: {supplier.name}
        </Typography>

        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon onClick={() => addToCart(product)} />
        </Fab>
      </CardContent>
    </Card>
  );
};

// proptypes to do typechecking
SingleProduct.propTypes = {
  product: PropTypes.object,
  supplier: PropTypes.object,
  category: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
};

export default SingleProduct;
