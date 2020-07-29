import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import home from './assets/home.png';
import lens from './assets/lens.png';

import { NavbarContainer, HomeIcon, Input, Button, Lens } from './styles';

const Navbar = () => {
  const [tag, setTag] = useState('')

  const changeTag = (e) => setTag(e.target.value)
  return(
  <NavbarContainer>
    <Link to="/">
      <HomeIcon src={home} />
    </Link>
    <Input type="text" onChange={changeTag}/>
    <Link to={`/filtered/${tag}`}>
    <Button>
      Search
      <Lens src={lens} />
    </Button>
    </Link>
  </NavbarContainer>
  )
}

export default Navbar;
