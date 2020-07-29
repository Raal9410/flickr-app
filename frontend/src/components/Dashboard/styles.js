import styled from 'styled-components';

const Container = styled.div`
  width: 98vw;
  height: 98vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
  grid-gap: 1rem;
`;

export default Container;
