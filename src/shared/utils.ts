import { Cocktail } from './types';

export const extractIngredientsList = (
    cocktail: Cocktail
): { ingredient: string; measure: string }[] => {
    const ingredients: { ingredient: string; measure: string }[] = [];

    Object.keys(cocktail).forEach(key => {
        const match = key.match(/^strIngredient(\d+)$/);
        if (match) {
            const index = match[1];
            const ingredient = cocktail[`strIngredient${index}`];
            const measure = cocktail[`strMeasure${index}`];

            if (ingredient && measure && ingredient.trim()) {
                ingredients.push({
                    ingredient: ingredient.trim(),
                    measure: measure?.trim() || '',
                });
            }
        }
    });

    return ingredients;
};
