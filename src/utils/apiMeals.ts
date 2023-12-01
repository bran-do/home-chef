// Busca as 12 comidas da api e retorna um array com elas
export const fetchMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  );
  const data = await response.json();
  const Meals = data.meals.slice(0, 12);
  return Meals;
};

// Busca as categorias de comidas da api e retorna um array com elas
export const fetchCategoriesMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  const categoriesMeals = data.meals.slice(0, 5);
  return categoriesMeals;
};

// Busca os detalhes da comida pelo id
export const fetchMealById = async (mealId: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
  );
  const data = await response.json();
  const meal = data.meals[0];
  return meal;
};

// Busca todas as comidas da api e retorna um array com elas
export const fetchAllMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data.meals;
};
