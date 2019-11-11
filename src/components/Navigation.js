import React from 'react';
import styled from 'styled-components';

const Nav = styled.button`
  width: 9em;
  height: 3em;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  background: whitesmoke;
  border: none;

  &:hover {
    width: 11em;
  }
`;

const NavWrapper = styled.div``;

const NavLeft = styled(Nav)`
  border-top-left-radius: 50%;
  &:hover {
    transition: all 300ms ease-in-out;
    transform: translateX(-5px);
  }
`;

const NavRight = styled(Nav)`
  border-top-right-radius: 50%;
  &:hover {
    transition: all 300ms ease-in-out;
    transform: translateX(5px);
  }
`;

function Navigation() {
  return (
    <NavWrapper>
      <NavLeft>Event Item</NavLeft>
      <NavRight>Servant Banner</NavRight>
    </NavWrapper>
  );
}

export default Navigation;
