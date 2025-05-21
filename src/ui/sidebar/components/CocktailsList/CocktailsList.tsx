import { memo } from 'react';

import { SidebarLink } from '../SidebarLink/SidebarLink';

import styles from './CoctailsList.module.scss';

import { useCocktailsStore } from '@/store/useCocktailsStore';

export const CoctailsList = memo(() => {
    const { cocktailIds } = useCocktailsStore();
    return (
        <div className={styles['cocktails-list']}>
            {cocktailIds.length ? (
                <>
                    <div className={styles['cocktails-list__title']}>
                        Список коктейлей
                    </div>
                    <div className={styles['cocktails-list__list']}>
                        {cocktailIds.map(id => (
                            <SidebarLink key={id} id={id}>
                                {id}
                            </SidebarLink>
                        ))}
                    </div>
                </>
            ) : (
                <div>нет коктейлей</div>
            )}
        </div>
    );
});

export default CoctailsList;
