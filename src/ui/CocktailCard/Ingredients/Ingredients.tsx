import styles from './Ingredients.module.scss';

import { Cocktail } from '@/shared/types';
import { extractIngredientsList } from '@/shared/utils';

const Ingredients = ({ cocktail }: { cocktail: Cocktail }) => {
    return (
        <div className={styles['ingredients']}>
            <h3>List of ingredients:</h3>
            <ul className={styles['ingredients-list']}>
                {extractIngredientsList(cocktail).map(
                    ({ ingredient, measure }) => (
                        <li
                            key={ingredient + measure}
                            className={styles['list-item']}
                        >
                            {ingredient}: {measure}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Ingredients;
