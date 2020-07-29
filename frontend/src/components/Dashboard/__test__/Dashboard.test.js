import React from 'react';
import { render } from 'enzyme';

import Dashboard from '../Dashboard';
import { Context } from '../../../context/context';

describe('<Dashboard />', () => {
  describe('Rendering', () => {
    it('matches the empty snapshot', () => {
      const data = {
        images: [],
      };
      const component = render(
        <Context.Provider value={data}>
          <Dashboard />
        </Context.Provider>,
      );
      expect(component).toMatchSnapshot();
    });
    it('matches the images array snapshot', () => {
      const data = {
        images: [
          'https://live.staticflickr.com/65535/50167121651_6baae58a90_m.jpg',
          'https://live.staticflickr.com/65535/50167106001_c60d1bca7e_m.jpg',
          'https://live.staticflickr.com/65535/50167383447_6e8ee8c34f_m.jpg',
          'https://live.staticflickr.com/65535/50167383052_35571f4ce5_m.jpg',
          'https://live.staticflickr.com/65535/50167121236_efbd5e9cb6_m.jpg',
        ],
      };
      const component = render(
        <Context.Provider value={data}>
          <Dashboard />
        </Context.Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
