import React from "react";
import styled, { keyframes } from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const LogoSpin = keyframes`
 from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;
const Logo = styled.img`
  height: 10vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${LogoSpin} infinite 20s linear;
  }
`;

const Header = ({ logo }) => {
  return (
    <HeaderWrapper className="App-header">
      <br />
      <Logo src={logo} className="App-logo" alt="logo" />
      <h1>My Github Portfolio</h1>
    </HeaderWrapper>
  );
};

export default Header;
