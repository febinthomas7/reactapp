import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useCartContext } from "../context/Cart_Context";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";
const Nav = () => {
  const { total_item } = useCartContext();
  const [menu, setMenu] = useState("");
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  console.log("user", user);

  return (
    <Navbar>
      <div className={menu ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenu(false)}
              className="navbar-link home-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setMenu(false)}
              className="navbar-link "
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              onClick={() => setMenu(false)}
              className="navbar-link "
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenu(false)}
              className="navbar-link "
            >
              Contact
            </NavLink>
          </li>

          {isAuthenticated && (
            <div className="profile">
              <p>{user.name}</p>
              <img
                className="profilePhoto"
                src={user.picture}
                alt={user.name}
              />
            </div>
          )}

          {isAuthenticated ? (
            <li>
              <Button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                log out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </li>
          )}

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <AiOutlineShoppingCart className="cart-trolley" />
              <span className={total_item >= 1 ? "cart-total--item" : "span"}>
                {total_item >= 1 ? total_item : null}
              </span>
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <AiOutlineMenu
            onClick={() => setMenu(true)}
            name="menu-outline"
            className="mobile-nav-icon"
            style={{ width: "20px", height: "20px" }}
          />
          <AiOutlineClose
            onClick={() => setMenu(false)}
            name=" close-outline"
            className="mobile-nav-icon  close-outline"
          />
        </div>
      </div>
    </Navbar>
  );
};
const Navbar = styled.nav`
  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: transparent;

    .profilePhoto {
      border-radius: 50%;
      height: 50px;
      border: 1px solid #7070de;
    }
  }
  .span {
    display: none;
  }
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;
    list-style: none;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: ${({ theme }) => theme.colors.black};
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }
    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }
  .user-login--name {
    text-transform: capitalize;
  }
  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon[] {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
    }
    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      //   transition: all 3s linear;
    }
    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      //   transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;

export default Nav;
