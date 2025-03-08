import React, { useState } from "react";
import { styled } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/Cart_Context";
const AddToCart = ({ product }) => {
  // const{id ,colors,stock}= product;
  const [amount, setAmount] = useState(1);
  console.log(product[0]);

  const { addToCart } = useCartContext();

  const decrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const increment = () => {
    amount < product[0]?.stock
      ? setAmount(amount + 1)
      : setAmount(product[0]?.stock);
  };

  return (
    <Wrapper>
      <CartAmountToggle
        amount={amount}
        decrement={decrement}
        increment={increment}
      />

      <Button>
        <NavLink
          to="/cart"
          onClick={() => addToCart(product[0]?.id, amount, product[0])}
        >
          ADD TO CART
        </NavLink>
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .cart-button {
    display: flex;
    gap: 4rem;
    width: 157px;
    align-items: center;
    justify-content: center;
    padding: 15px;
    button {
      border-radius: 50%;
      align-items: center;
      display: flex;
      border: none;
      cursor: pointer;
      padding: 5px;
    }
  }
  .btnStyle {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: transparent;
    margin-inline: 10px;
    opacity: 0.5;
    border: none;
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .check {
    color: white;
  }
  p {
    align-items: center;
    display: flex;
  }
`;

export default AddToCart;
