import React from "react";
import "./cartDropdown.scss";
import CustomButton from "../custom-button/customButton";
import CartItem from "../cart-item/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = state => ({
  cartItem: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
