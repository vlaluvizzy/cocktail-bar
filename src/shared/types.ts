export type Cocktail = Record<string, string>;

export type GetCocktailsResponse = {
    drinks: Cocktail[] | null;
};
