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
`;

const Header = () => (
  <Wrapper>
    <LeftContent>
      <a title="Home" href="/">
        <img width="5%" src={withPrefix('/social/logo.png')} alt="Home" />
      </a>
      <br />
      <a title="About" href="/">
        About
      </a>
      &nbsp;|{' '}
      <a title="Github" href="https://github.com/arjunrao87/">
        Github
      </a>
      &nbsp;|{' '}
      <a title="Twitter" href="https://mobile.twitter.com/raoarjun/">
        Twitter
      </a>
      &nbsp; |{' '}
      <a title="LinkedIn" href="https://linkedin.com/in/arjunrao87/">
        LinkedIn
      </a>
      &nbsp; |{' '}
      <a title="Medium" href="https://medium.com/@arjunrao87/">
        Medium
      </a>
      &nbsp; |{' '}
      <a title="Instagram" href="https://instagram.com/raoarjun/">
        Instagram
      </a>
      <br />
      <br />
    </LeftContent>
  </Wrapper>
);

export default Header;
