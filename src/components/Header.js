import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          style={{ height: "50px", width: "auto" }}
          src="/images/logo1.png"
          alt="my logo"
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4vw; /* Responsive padding */
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
    max-width: 100%;
  }

  /* Tablets & smaller laptops */
  @media (max-width: 1024px) {
    height: 8rem;

    .logo {
      height: 4rem;
    }
  }

  /* Mobile devices */
  @media (max-width: 768px) {
    height: 9rem;
    padding: 0 2vw;

    .logo {
      height: 3.5rem;
    }
  }

  /* Extra small devices */
  @media (max-width: 480px) {
    height: 9rem;
    padding: 0 3.5vw;

    .logo {
      height: 3rem;
    }
  }
`;

export default Header;
