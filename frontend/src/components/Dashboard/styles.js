import styled from 'styled-components';

const Container = styled.div `
    width: 99vw;
    height: 99vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 2fr));
    grid-gap: 1rem;
`

export default Container;