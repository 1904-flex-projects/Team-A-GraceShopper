import React from 'react';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const Product = require('../../server/db/models/Product');
import store from '../../src/redux/store';
// Enzyme requires adapter for usage
const adapter = new Adapter();
enzyme.configure({ adapter });
import { Provider } from 'react-redux';
// Component imports
import { AllProducts, SingleProduct } from '../../src/components/index';
describe('All Products Page', () => {
  // declare any variables
  let products = [
    {
      name: `Ellie's Brown Ale`,
      description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
      imageUrl: '/images/avery_ellies.jpg',
      price: 5.0,
    },
    {
      name: `Naimuns Finest`,
      description: `This beautiful test wine is delicious for the brave.`,
      imageUrl: '/images/avery_ellies.jpg',
      price: 100.0,
    },
    {
      name: `Drew Brew`,
      description: `IBU one million.`,
      imageUrl: '/images/avery_ellies.jpg',
      price: 10.0,
    },
    {
      name: `Sample 4`,
      description: `The fourth sample.`,
      imageUrl: '/images/avery_ellies.jpg',
      price: 4.0,
    },
  ];

  describe('<AllProducts /> component', () => {
    //beforeEach(() => { // store.setState({ products: products }); });
    xit('renders a list of products', () => {
      const wrapper = shallow(
        <Provider store={products}>
          <AllProducts />
        </Provider>
      );
      console.log(wrapper);
    });

    xit('renders list items', async () => {
      const createdProducts = await Product.bulkCreate(products);
      const wrapper = shallow(
        <Provider store={store}>
          <AllProducts />
        </Provider>
      );
      console.log(wrapper);
      const listItems = wrapper.find(<SingleProduct />);
      expect(listItems).to.have.length(4);
      expect(listItems.at(2).text()).to.contain('IBU');
    });
  });
});
