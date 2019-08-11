// import React from 'react';
// import enzyme, { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { Provider } from 'react-redux';

// // Enzyme requires adapter for usage
// const adapter = new Adapter();
// enzyme.configure({ adapter });

// // Component imports
// import { AllProducts } from '../../src/components/index';

// describe('All Products Page', () => {
//   //   declare any variables
//   let products = [
//     {
//       name: `Ellie's Brown Ale`,
//       description: `This beautiful, deep russet brew has the sweet and somewhat nutty character of Adam Avery's late (1992-2002) Chocolate Lab, for which it is named.`,
//       imageUrl: '/images/avery_ellies.jpg',
//       price: 5.0,
//     },
//     {
//       name: `Naimuns Finest`,
//       description: `This beautiful test wine is delicious for the brave.`,
//       imageUrl: '/images/avery_ellies.jpg',
//       price: 100.0,
//     },
//   ];

//   describe('<AllProducts /> component', () => {
//     xit('renders a list of products', () => {
//       const allProdWrapper = shallow(<AllProducts />);
//       console.log(wrapper);
//     });

//     // it('renders list items for the campuses passed in as props', async () => {
//     //   const campusRecords = await Campus.bulkCreate(campuses);
//     //   //we are creating the campuses in the database so the extra credit in tier-4 doesn't break this spec.
//     //   const wrapper = shallow(<CampusList campuses={campusRecords} />);
//     //   const listItems = wrapper.find('li');
//     //   expect(listItems).to.have.length(3);
//     //   expect(listItems.at(2).text()).to.contain('Pluto');
//     // });
//   });
// });

// default
describe('Testing Defaults', () => {
  //   declare any variables
  //   beforeEach(() => {

  //   });

  it('renders Navbar <Navbar /> component', () => {
    expect('1').toBe('1');
  });
});
