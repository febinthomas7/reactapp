import React from "react";
import { useCartContext } from "./context/Cart_Context";
import { styled } from "styled-components";
import CartItem from "./components/CartItem";
import { Button } from "./components/Button";
import { NavLink } from "react-router-dom";
import FormatPrice from "./helpers/FormatPrice";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cart, clearChat, total_amount, shipping_fee } = useCartContext();
  const { isAuthenticated, user } = useAuth0();

  if (cart.length === 0) {
    return (
      <Emptycart>
        <h3>No Item In Cart.</h3>
      </Emptycart>
    );
  }
  return (
    <Wrapper>
      <div className="container">
        {isAuthenticated && (
          <div className="profile">
            <img
              className="profilePhoto"
              src={user?.picture}
              alt={user?.name}
            />
            <p>{user?.name}</p>
          </div>
        )}
      </div>
      <div className="container">
        <div className="cart-heading grid grid-five-column">
          <p>item</p>
          <p className="cart_hide">price</p>

          <p>quantity</p>
          <p>subTotal</p>
          <p>remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((e) => {
            return <CartItem key={e.id} {...e} />;
          })}
        </div>
        <div className="cart-two-button">
          <NavLink to="/product">
            <Button>Continue Shopping</Button>
          </NavLink>
          <Button className="btn" onClick={clearChat}>
            clear cart
          </Button>
        </div>

        <div className="order-total-amount">
          <div className="order">
            <div>
              <p>subtotal:</p>
              <p className="price">
                <FormatPrice price={total_amount}></FormatPrice>
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p className="price">
                <FormatPrice shippingfee={shipping_fee}></FormatPrice>
              </p>
            </div>
            <hr />
            <div>
              <p>total amount:</p>
              <p className="price">
                <FormatPrice price={total_amount + +shipping_fee}></FormatPrice>
              </p>
            </div>
          </div>

          <Button className="btn">order now</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Emptycart = styled.section`
  height: 28vh;
  align-items: center;
  display: flex;
  justify-content: center;

  p {
  }
`;
const Wrapper = styled.section`

.order-total-amount{
  display: flex;
    justify-content: end;
    margin-top: 40px;
    margin-left: 81%;
    flex-direction: column;
.order{
  background-color: #f4f4f4;
  width: 225px;
  height: 160px;
  padding: 15px;
  div{
        display: flex;
    align-items: center;
    justify-content:space-between;

    p{
      font-size: 15px;
    color: grey;
    }
    .price{
      font-size: 15px;
    color: black;
    font-weight: 600;
    }

  }
  hr{
    margin: 24px 0px;
  }
}
.btn{
  width: 225px;
  height: 60px;
}
}
}
.profile{
  display: flex;
    align-items: center;
    gap: 10px;
    padding: 29px 21px;
    background-color: #f4f4f4;

    .profilePhoto{
      border-radius: 50%;
    height: 50px;
    border: 1px solid #7070de;
    }
}
.btn{
  background-color:red;
}
.cart-two-button{
  display:flex;
  justify-content: space-between;
}
.color-style{
  height:20px;
  width:20px;
  border-radius:50%;
}
.img{
  height:50px;
  width:50px;
}
.color-div{
  display: flex;
    align-items: center;
    gap: 5px;
}
.cart-image--name{
  
  display: flex;
  gap: 12px;
  align-items: center;
    justify-content: center;


}
.cart-heading{
  padding-block: 20px;
  text-align: center;
}
.cart-button{
  display: flex;
  gap: 2rem;
  width: 157px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  button{
      border-radius:50%;
      align-items: center;
  display: flex;
  border: none;
  cursor: pointer;
  padding: 5px;
  }
}
.delete{
  font-size:20px;
  color:red;
  cursor:pointer;
}
`;

export default Cart;
