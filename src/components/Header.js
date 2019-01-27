import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const Wrapper = styled.header`
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 2rem 2rem 1.5rem 2rem;
`;

const LeftContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;
const Header = () => (
  <Wrapper>
    <LeftContent>
      <a title="Home" href="/">
        <img width="5%" src={withPrefix('/social/logo.png')} alt="Home" />
      </a>
    </LeftContent>
    <LeftContent>
      <b>
        Personal writings of <a href="https://mobile.twitter.com/raoarjun/">Arjun Rao</a>
      </b>
    </LeftContent>
    <br />
  </Wrapper>
);

export default Header;
