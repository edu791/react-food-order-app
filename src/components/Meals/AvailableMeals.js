import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useState, useEffect } from "react";

async function fetchMeals() {
  const response = await fetch(
    "https://meals-ecommerce-default-rtdb.firebaseio.com/meals.json"
  );
  const responseData = await response.json();
  const loadedMeals = [];
  for (const key in responseData) {
    loadedMeals.push({
      id: key,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price,
    });
  }
  return loadedMeals;
}

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMeals().then((loadedMeals) => {
      setMeals(loadedMeals);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles['meals-loading']}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
