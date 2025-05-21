import type { Cocktail, GetCocktailsResponse } from '../shared/types';

export const getCocktails = async (cocktailId: string): Promise<Cocktail[]> => {
    const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailId}`
    );
    if (!res.ok) throw new Error(res.statusText);

    const data: GetCocktailsResponse = await res.json();
    if (data.drinks === null) throw new Error('No cocktails found');

    return data.drinks;
};
