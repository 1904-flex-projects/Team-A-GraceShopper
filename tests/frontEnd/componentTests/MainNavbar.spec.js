import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme requires adapter for usage
const adapter = new Adapter();
enzyme.configure({ adapter });

// import component to test
import Main from '../../../src/components/Main';
import Navbar from '../../../src/components/Navbar';
import Button from '@material-ui/core/Button';

describe('React Components Test', () => {
  describe('<Main /> & <Navbar /> components', () => {
    let main;
    beforeEach(() => {
      main = shallow(<Main />);
    });

    it('renders Navbar <Navbar /> component', () => {
      expect(main.find(Navbar).length).toEqual(1);
    });
    it('Navbar contains login and signup links', () => {
      const navWrap = mount(
        <Router>
          <Navbar />
        </Router>
      );
      expect(
        navWrap
          .find(Button)
          .at(0)
          .text()
      ).toBe('Login');
      expect(
        navWrap
          .find(Button)
          .at(1)
          .text()
      ).toBe('Sign Up');
    });
  });
});
