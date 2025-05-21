import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Error.module.scss';

export const ErrorPage = () => (
    <div className={styles['error-page']}>
        <div className={styles['error-page__content']}>
            <h1>404</h1>
            Данной страницы не существует
            <Link to="/" className={styles['error-page__link']}>
                перейти на главную
            </Link>
        </div>
    </div>
);
