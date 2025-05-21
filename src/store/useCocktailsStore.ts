import { create } from 'zustand';

import type { Cocktail } from '../shared/types';

import { getCocktails } from './get-cocktails';
import { cocktailIdList } from './constants';

type CocktailsState = {
    cocktails: Cocktail[] | null;
    isLoading: boolean;
    error: string | null;
    fetchCocktails: (id: string) => Promise<void>;
    setCurrentCocktailId: (id: string) => void;
    cocktailIds: typeof cocktailIdList;
    currentCocktailId: string;
};

export const useCocktailsStore = create<CocktailsState>(set => ({
    cocktails: [],
    isLoading: false,
    error: null,
    cocktailIds: cocktailIdList,
    currentCocktailId: cocktailIdList[0],
    fetchCocktails: async (cocktailId: string) => {
        set({ isLoading: true });
        try {
            const cocktails = await getCocktails(cocktailId);
            if (cocktails.length === 0) throw new Error('No cocktails found');
            set({ cocktails });
        } catch (error) {
            set({
                cocktails: null,
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        } finally {
            set({ isLoading: false });
        }
    },
    setCurrentCocktailId: (id: string) => set({ currentCocktailId: id }),
}));
