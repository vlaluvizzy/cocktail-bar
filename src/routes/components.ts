import { CocktailPage } from '../pages/Cocktail/Cocktail';
import { createComponents } from '../shared/route-utils';

import type { ROUTES } from './routes';

export const COMPONENTS = createComponents<typeof ROUTES>({
    MAIN: CocktailPage,
    COCKTAIL: CocktailPage,
});
