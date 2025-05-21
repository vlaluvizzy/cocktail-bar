import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Ingredients from './Ingredients/Ingredients';
import Instructions from './Instructions/Instructions';
import CommonInfo from './CommonInfo/CommonInfo';
import styles from './CocktailCard.module.scss';

import { Cocktail } from '@/shared/types';

type CocktailCard = {
    cocktail: Cocktail;
};

const CocktailCard: React.FC<CocktailCard> = ({ cocktail }: CocktailCard) => {
    return (
        <div className={styles['cocktail-card']}>
            <div className={styles['cocktail-card__info']}>
                <h2 className={styles['cocktail-card__title']}>
                    {cocktail.strDrink}
                </h2>
                <CommonInfo>
                    <span>{cocktail.strCategory}</span>
                    <span>{cocktail.strAlcoholic}</span>
                    <span>{cocktail.strGlass}</span>
                </CommonInfo>
                <Instructions instructions={cocktail.strInstructions} />
                <Ingredients cocktail={cocktail} />
            </div>
            <div className={styles['cocktail-card__image-wrapper']}>
                <LazyLoadImage
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                    width={200}
                    height={200}
                    effect="blur"
                    className={styles['cocktail-card__image']}
                />
            </div>
        </div>
    );
};

export default CocktailCard;
