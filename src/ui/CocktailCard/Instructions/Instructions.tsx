import React from 'react';

import styles from './Instructions.module.scss';

const Instructions = ({ instructions }: { instructions: string }) => {
    return (
        <div className={styles['instructions']}>
            <h3>Instructions:</h3>
            <p>{instructions}</p>
        </div>
    );
};

export default Instructions;
