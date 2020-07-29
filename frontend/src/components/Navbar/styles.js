import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;

  @media (min-width: 600px) {
    width: 85vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  margin-left: 100px;
  }
`;

const HomeIcon = styled.img`
  width: 55px;
  height: auto;

  @media (min-width: 600px) {
    width: 50px;
    height: auto;
  }
`;

const Input = styled.input`
  width: 90vw;
  height: 50px;
  border: 1px solid black;
    border-radius: 5px;

  @media (min-width: 600px) {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  background: white;
  font-size: 0;
  object-fit: contain;
  @media (min-width: 600px) {
    width: 100px;
    height: 40px;
    color: gray;
    margin: 1em;
    font-size: 15px;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
    background: white;
  }
`;

const Lens = styled.img `
width: 25px;
height: 25px;
    @media(min-width: 600px){
        display: none;
    }
`

export { NavbarContainer, HomeIcon, Input, Button, Lens };
