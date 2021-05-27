import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext } from 'react';
import CartContext from '../../store/cart-context'

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
