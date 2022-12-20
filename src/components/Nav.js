import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Container>
      <Logo>
        <a href="#">NV</a>
      </Logo>
      <NavMenu>
        <ul>
          <li>
            <a href="#sections">Sections</a>
          </li>
          <li>
            <a href="#illustrations">Illustrations</a>
          </li>
          <li>
            <a href="#contact">Contactez-nous</a>
          </li>
        </ul>
      </NavMenu>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
  background-color: #0e111c;
  height: 70px;
  color: #f9f9f9;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  a {
    font-size: 18px;
    letter-spacing: 1.8px;
    font-family: "Great Vibes", cursive;
    cursor: pointer;
    color: #010a80;
    text-decoration: none;
    font-weight: 600;
  }
`;
const NavMenu = styled.div`
  flex: 1;
  ul {
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      position: relative;
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #f9f9f9;
        font-size: 16px;
        @media only screen and (max-width: 675px) {
          font-size: 14px;
        }
      }
      &:after {
        position: absolute;
        content: "";
        left: 0;
        width: 0%;
        bottom: -6px;
        height: 3px;
        background-color: #f9f9f9;
        border-radius: 4px;
        opacity: 0;
        transition: 0.25s;
      }
      &:hover {
        &:after {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
`;
