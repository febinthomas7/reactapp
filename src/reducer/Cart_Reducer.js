const CartReducer = (state, action) => {
  switch (action.type) {
    case "CART_ITEM":
      let { id, amount, product } = action.payload;
      console.log("cart", product);

      let existingProduct = state.cart.find((e) => e.id === id);
      if (existingProduct) {
        let update = state.cart.map((e) => {
          if (e.id === id) {
            let newAmount = e.amount + amount;

            if (newAmount >= e.max) {
              newAmount = e.max;
            }
            return {
              ...e,
              amount: newAmount,
            };
          } else {
            return e;
          }
        });

        return {
          ...state,
          cart: update,
        };
      } else {
        let cartproduct = {
          id: id,
          name: product?.title || "unknown",
          amount,
          image: product.thumbnail,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartproduct],
        };
      }
    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((e) => e.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
      };

    case "DECREMENT":
      let decre = state.cart.map((e) => {
        if (e.id === action.payload) {
          let decrement = e.amount - 1;

          if (decrement <= 1) {
            decrement = 1;
          }

          return {
            ...e,
            amount: decrement,
          };
        } else {
          return e;
        }
      });

      return {
        ...state,
        cart: decre,
      };

    case "INCREMENT":
      let incre = state.cart.map((e) => {
        if (e.id === action.payload) {
          let increment = e.amount + 1;
          if (increment >= e.max) {
            increment = e.max;
          }

          return {
            ...e,
            amount: increment,
          };
        } else {
          return e;
        }
      });

      return {
        ...state,
        cart: incre,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CART_TOTAL_AMOUNT_ITEM":
      let { total_item, total_amount } = state.cart.reduce(
        (initial, curelem) => {
          let { amount, price } = curelem;
          initial.total_amount += price * amount;
          initial.total_item += amount;
          return initial;
        },
        {
          total_amount: 0,
          total_item: 0,
        }
      );
      return {
        ...state,
        total_amount,
        total_item,
      };

    default:
      return state;
  }
};

export default CartReducer;
