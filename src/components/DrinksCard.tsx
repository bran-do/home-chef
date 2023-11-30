import React from 'react';
import { NavLink } from 'react-router-dom';
import { DrinkType } from '../types';

type DrinkCardProps = {
  drink: DrinkType;
  index: number;
};

function DrinksCard({ drink, index }: DrinkCardProps) {
  return (
    <NavLink to={ `/drinks/${drink.idDrink}` } data-testid={ `${index}-recipe-card` }>
      <h3 data-testid={ `${index}-card-name` }>{drink.strDrink}</h3>
      <img
        data-testid={ `${index}-card-img` }
        src={ drink.strDrinkThumb }
        alt="drink thumbnail"
      />
    </NavLink>
  );
}

export default DrinksCard;