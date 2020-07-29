import React, { useState, useContext } from 'react';
import { Context } from '../../context/context';

import home from './assets/home.png';
import lens from './assets/lens.png';

import { NavbarContainer, HomeIcon, Input, Button, Lens } from './styles';

const Navbar = () => {
  const [tag, setTag] = useState('');
  const { fetchTagFeed, fetchPublicFeed } = useContext(Context);

  const fetchImages = e => {
    e.preventDefault();
    fetchTagFeed(tag);
  };

  const changeTag = e => setTag(e.target.value);
  return (
    <NavbarContainer>
      <HomeIcon src={home} onClick={fetchPublicFeed} />
      <Input type="text" onChange={changeTag} placeholder="What are you looking for?" />
      <Button onClick={fetchImages}>
        Search
        <Lens src={lens} />
      </Button>
    </NavbarContainer>
  );
};

export default Navbar;
