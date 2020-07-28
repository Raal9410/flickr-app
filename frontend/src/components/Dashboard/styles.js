import styled from 'styled-components';

const Container = styled.div `
    width: 99vw;
    height: 99vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
    grid-gap: 1rem;
    margin-left: 10px;
`

export default Container;