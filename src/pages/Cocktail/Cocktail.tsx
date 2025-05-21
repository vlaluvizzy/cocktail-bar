import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Cocktail.module.scss';

import { useCocktailsStore } from '@/store/useCocktailsStore';
import CocktailCard from '@/ui/CocktailCard/CocktailCard';

export const CocktailPage = () => {
    const { pathname } = useLocation();
    const { cocktails, isLoading, fetchCocktails, currentCocktailId } =
        useCocktailsStore();

    useEffect(() => {
        const cocktailId = pathname.split('/').pop();
        if (cocktailId) {
            fetchCocktails(cocktailId);
        }
    }, [pathname]);

    const renderContent = () => {
        if (isLoading) {
            return <div>Загрузка...</div>;
        }
        if (!cocktails) {
            return (
                <div>
                    Коктейлей не найдено
                    <br />
                    <button onClick={() => fetchCocktails(currentCocktailId)}>
                        Попробовать снова
                    </button>
                </div>
            );
        }
        return (
            <div className={styles['cocktail-cards']}>
                {cocktails.map(cocktail => (
                    <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </div>
        );
    };
    return <div className={styles['cocktail-page']}>{renderContent()}</div>;
};
