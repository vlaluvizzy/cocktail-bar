import { getRouteValues } from '../shared/route-utils';

import { COMPONENTS } from './components';
import { ROUTES } from './routes';

export const ROUTES_VALUES = getRouteValues(ROUTES, COMPONENTS);
