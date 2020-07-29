import React from 'react';
import { render } from 'enzyme';

import ImageCard from '../ImageCard';
import image from './test-assets/orlie-k-23eOqw3ifxo-unsplash.jpg';

describe('<ImageCard />', () => {
  describe('Rendering', () => {
    it('matches the snapshot', () => {
      const component = render(<ImageCard src={image} alt={image} />);
      expect(component).toMatchSnapshot();
    });
  });
});
