// import { useState } from 'react';
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { AiTwotoneDelete } from "react-icons/ai";
import { useCartContext } from "../context/Cart_Context";
const CartItem = ({ id, name, image, price, amount, stock }) => {
  const { removeItem, decrement, increment } = useCartContext();

  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img className="img" src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>

      <div className="cart-image--name">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <div className="cart-image--name">
        <CartAmountToggle
          amount={amount}
          decrement={() => decrement(id)}
          increment={() => increment(id)}
        />
      </div>

      <div className="cart-image--name">
        <p>
          <FormatPrice price={price * amount} />
          {amount}
        </p>
      </div>

      <div className="cart-image--name">
        <AiTwotoneDelete className="delete" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
