import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  float: right;
  text-align: center;
  background-color: #0d47a1;
`;

const NavHeader = styled.div`
  max-width: 1010px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const NavLogIn = styled.div`
  font-family: "Helvetica Neue";
  font-size: 16px;
  padding: 10px 20px;

  background: #0d47a1;
  color: #e5e5e5;
  border-style: none;

  &:hover {
    color: #bebebe;
  }
`;

const NavSignUp = styled.div`
  right 100px;
  color: #e5e5e5;
  border: 1px solid #e5e5e5;
  padding: 10px 25px;
  border-radius: 30px;

   &:hover {
         color: #bebebe;
         border: 1px solid #bebebe;
         text-decoration: none;
  }
  `;

export function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <StyledLink to="/components/LogIn">
          <NavLogIn> Log In </NavLogIn>
        </StyledLink>
        <StyledLink to="/components/SignUp">
          <NavSignUp> Sign Up </NavSignUp>
        </StyledLink>
      </NavHeader>
    </Nav>
  );
}
