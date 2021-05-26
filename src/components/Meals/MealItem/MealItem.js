import styles from "./MealItem.module.css";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>{props.name}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{price}</div>
    </li>
  );
}
