import React from 'react';
import { render } from 'enzyme';

import Navbar from '../Navbar';
import { Context } from '../../../context/context';

describe('<Navbar />', () => {
  describe('Rendering', () => {
    it('matches the snapshot', () => {
      const data = {};
      const component = render(
        <Context.Provider value={data}>
          <Navbar />
        </Context.Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
