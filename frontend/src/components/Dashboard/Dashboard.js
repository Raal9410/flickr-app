import React, { useContext, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Context } from '../../context/context';

import ImageCard from '../Image/ImageCard';

import Container from './styles';

const Dashboard = () => {
  const { images, fetchPublicFeed } = useContext(Context);

  useEffect(() => {
    fetchPublicFeed(); // eslint-disable-next-line
  }, []); 

  const render = () => {
    if (images.length) {
      return images.map(image => <ImageCard key={image} content={image} />);
    }
    return <ReactLoading type="balls" color="black" height={100} width={300} />;
  };

  return <Container>{render()}</Container>;
};

export default Dashboard;
