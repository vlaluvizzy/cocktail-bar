import type { RouteProps } from 'react-router-dom';

export type CustomRoute = Omit<RouteProps, 'children' | 'render' | 'component'>;

export const createComponents = <T>(row: {
    [K in keyof T]: RouteProps['Component'];
}): {
    [K in keyof typeof row]: RouteProps['Component'];
} => row;

function isValidKey<RoutesKeys extends string>(
    value: string,
    routes: {
        [K in RoutesKeys]: CustomRoute;
    }
): value is RoutesKeys {
    return value in routes;
}

export const createRoutes = <T>(row: { [K in keyof T]: CustomRoute }): {
    [K in keyof typeof row]: CustomRoute;
} => row;

export function getRouteValues<
    Routes extends {
        [K in string]: CustomRoute;
    },
    RouterComponents extends {
        [K in keyof Routes]: RouteProps['Component'];
    },
>(routes: Routes, components: RouterComponents): Array<[string, CustomRoute]> {
    return Object.entries(routes).map(([key, value]) => {
        if (isValidKey(key, routes)) {
            return [key, { ...value, component: components[key] }];
        }
        throw new Error(
            `Найден неизвестный ключ роутинга '${key}', набор ключей ROUTES и COMPONENTS должен быть одинаковым`
        );
    });
}
