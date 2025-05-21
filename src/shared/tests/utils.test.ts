import { extractIngredientsList } from '../utils';
import { Cocktail } from '../types';

describe('extractIngredientsList', () => {
    it('returns an empty array for an empty cocktail object', () => {
        const cocktail: Cocktail = {};
        expect(extractIngredientsList(cocktail)).toEqual([]);
    });

    it('returns an empty array for a cocktail object with no ingredients', () => {
        const cocktail: Cocktail = { foo: 'bar' };
        expect(extractIngredientsList(cocktail)).toEqual([]);
    });

    it('extracts ingredients from a cocktail object with a single ingredient', () => {
        const cocktail: Cocktail = {
            strIngredient1: 'Gin',
            strMeasure1: '1 1/2 oz',
        };
        expect(extractIngredientsList(cocktail)).toEqual([
            { ingredient: 'Gin', measure: '1 1/2 oz' },
        ]);
    });

    it('extracts ingredients from a cocktail object with multiple ingredients', () => {
        const cocktail: Cocktail = {
            strIngredient1: 'Gin',
            strMeasure1: '1 1/2 oz',
            strIngredient2: 'Lime Juice',
            strMeasure2: '1/2 oz',
        };
        expect(extractIngredientsList(cocktail)).toEqual([
            { ingredient: 'Gin', measure: '1 1/2 oz' },
            { ingredient: 'Lime Juice', measure: '1/2 oz' },
        ]);
    });

    it('handles ingredients with empty measures', () => {
        const cocktail: Cocktail = {
            strIngredient1: 'Gin',
            strMeasure1: '',
        };
        expect(extractIngredientsList(cocktail)).toEqual([]);
    });

    it('ignores ingredients with empty names', () => {
        const cocktail: Cocktail = {
            strIngredient1: '',
            strMeasure1: '1 1/2 oz',
        };
        expect(extractIngredientsList(cocktail)).toEqual([]);
    });
});
