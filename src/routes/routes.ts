import { createRoutes } from '../shared/route-utils';

export const ROUTES = createRoutes({
    MAIN: {
        path: '/',
    },
    COCKTAIL: {
        path: '/cocktails/:cocktail_id',
    },
});
