import React from 'react';
import { Link } from 'react-router-dom';

import home from './assets/home.png';
import lens from './assets/lens.png';

import { NavbarContainer, HomeIcon, Input, Button, Lens } from './styles';

const Navbar = () => (
  <NavbarContainer>
    <Link to="/">
      <HomeIcon src={home} />
    </Link>
    <Input type="text" />
    <Button>
      Search
      <Lens src={lens} />
    </Button>
  </NavbarContainer>
);

export default Navbar;
