import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 2rem 2rem 1.5rem 2rem;
`;

const CenterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Links = styled.div`
  text-align:center;
`

const Header = () => (
  <Wrapper>
    <CenterContent>
      <a title="Home" href="/">
        <h1>Arjun Rao</h1>
      </a>
    </CenterContent>
    <Links>
      <a href="https://github.com/arjunrao87/">
        <span><strong><u>Github</u></strong></span>
      </a>
      &nbsp;
      |
      &nbsp;
      <a href="https://mobile.twitter.com/raoarjun/">
        <span><strong><u>Twitter</u></strong></span>
      </a>
      &nbsp;
      |
      &nbsp;
      <a href="https://linkedin.com/in/arjunrao87/">
        <span><strong><u>LinkedIn</u></strong></span>
      </a>
      &nbsp;
      |
      &nbsp;
      <a href="https://instagram.com/raoarjun/">
        <span><strong><u>Instagram</u></strong></span>
      </a>
    </Links>
  </Wrapper>
);

export default Header;
