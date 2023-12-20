// src/components/TopBar.js
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Login from './login_component';

const TopBarContainer = styled.div`
  background-color: cyan;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Heading = styled.h1`
  color: white;
  margin: 0;
`;

const LoginButton = styled.button`
  background-color: white;
  color: cyan;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <Logo />
      <Heading>Reastuarant Finder</Heading>
      <LoginButton>Register</LoginButton>
    </TopBarContainer>
  );
};

export default TopBar;
