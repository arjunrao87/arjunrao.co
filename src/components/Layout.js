/* eslint no-unused-expressions:0 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { SEO, Header } from 'components';
import theme from '../../config/Theme';
import { media } from '../utils/media';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.default};
    font-display: swap;
    @media ${media.phone} {
      font-size: 24px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "MM.DD.YYYY")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <SEO />
          <GlobalStyle />
          <Header>
            <div>
              &nbsp;{' '}
              <Link title="Home" to="/">
                🏡
              </Link>
              &nbsp; |{' '}
              <Link title="Projects" to="/projects/">
                📚
              </Link>
            </div>
            &nbsp;{' '}
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
          </Header>
          {children}
          <Footer>
            &copy; 2018 - Arjun Rao <br />
          </Footer>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
