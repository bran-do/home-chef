import { useSelector } from 'react-redux';
import { RootState, InProgressProps } from '../../types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function DrinkInProgress({
  currentDrink,
  handleFavoriteBtn,
  handleShareBtn,
  handleIngredientCheck,
  handleFinishBtn,
  isFavorite,
  IngredientsList,
  mesureList,
  instructionsList,
  ingredientCheckedList,
  isCopied,
}: InProgressProps) {
  const { allDrinks } = useSelector((state: RootState) => state.mainReducer);
  console.log(instructionsList);
  return (
    <div>
      {allDrinks.length > 0 && currentDrink && IngredientsList.length > 0 && (
        <div>
          <h2 data-testid="recipe-title">
            { currentDrink.strDrink }
          </h2>

          <h4 data-testid="recipe-category">
            { `Category: ${currentDrink.strAlcoholic}` }
          </h4>

          <img src={ currentDrink.strDrinkThumb } alt="Imagem da receita" />

          <div>
            <button
              onClick={ handleFavoriteBtn }
            >
              <img
                data-testid="favorite-btn"
                src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
                alt={ isFavorite ? 'Black heart icon' : 'White heart icon' }
              />
            </button>

            <button
              data-testid="share-btn"
              onClick={ handleShareBtn }
            >
              <img src="/src/images/shareIcon.svg" alt="Share icon" />
            </button>

            {isCopied && <p>Link copied!</p>}
          </div>

          <div data-testid="instructions">
            <h4>Ingredients List</h4>

            {IngredientsList.map((ingredient, index) => (
              <div key={ index }>
                <input
                  type="checkbox"
                  id={ `${index}` }
                  onClick={ () => handleIngredientCheck(index) }
                />
                <label
                  data-testid={ `${index}-ingredient-step` }
                  htmlFor={ `${index}` }
                  className={
                ingredientCheckedList.includes(index) ? 'checked' : undefined
              }
                >
                  {`${ingredient[1]}: ${mesureList[index][1]}`}
                </label>
              </div>
            ))}

            <h4>Instructions</h4>
            {instructionsList.map((instruction, index) => (
              <p key={ index }>
                { instruction[1] }
                <br />
              </p>
            ))}
          </div>

          <button
            data-testid="finish-recipe-btn"
            disabled={ ingredientCheckedList.length !== IngredientsList.length }
            className="finish-recipe-btn"
            onClick={ handleFinishBtn }
          >
            Finish Recipe
          </button>
        </div>
      )}
      ;
    </div>
  );
}

export default DrinkInProgress;
