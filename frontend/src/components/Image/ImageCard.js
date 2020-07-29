import React from 'react';

import { Card, CardContainer } from './styles';

const ImageCard = ({ content }) => (
  <CardContainer>
    <Card src={content} alt={content} />
  </CardContainer>
);

export default ImageCard;
