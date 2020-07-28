import styled from 'styled-components';

const Card = styled.img`
  max-width: 400px;
  max-height: 150px;
  border-radius: 5px;
`;

const CardContainer = styled.div`
  display: flex;
  max-width: 400px;
  max-height: 150px;
  justify-content: center;
  align-items: center;
`;

export { Card, CardContainer };
