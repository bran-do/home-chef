import { AnyAction } from 'redux';
import { fetchCategoriesMeals } from '../../utils/apiMeals';
import { fetchCategoriesDrinks } from '../../utils/apiDrinks';

export const INITIAL_STATE = {
  place: '',
  meals: [],
  drinks: [],
  drinkCategories: await fetchCategoriesDrinks(),
  mealsCategories: await fetchCategoriesMeals(),
};

export const mainReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return { ...state, place: action.payload };
    case 'CHANGE_MEALS':
      return { ...state, meals: action.payload };
    case 'CHANGE_DRINKS':
      return { ...state, drinks: action.payload };
    case 'DINAMIC_RECIPE':
      return {
        ...state,
        meals: [],
        drinks: [],
        [action.payload.place]: action.payload.recipe };
    default:
      return state;
  }
};
