/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Header from '../components/header';
import '../styles/layout.css';

import Transition from '../components/transition';

import Particles from '../components/particles';

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`;

const GatsbyLink = styled.a`
  margin-left: 5px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <Transition location={location}>{children}</Transition>
          {/* <main>{children}</main> */}
          <Footer>
            <p>
              © {new Date().getFullYear()} {data.site.siteMetadata.title} |
              Built with
              {` `}
            </p>
            <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
          </Footer>
        </Content>
        <Particles />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
