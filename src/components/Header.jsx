import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #000000;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #e50914;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>StreamFlix</Logo>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          <StyledLink to="/series">Series</StyledLink>
          <StyledLink to="/live">Live</StyledLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;