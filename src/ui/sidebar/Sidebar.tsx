import { useCallback, useEffect, useRef, useState } from 'react';

import CoctailsList from './components/CocktailsList/CocktailsList';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const handleMenuRef = (node: HTMLDivElement) => {
        menuRef.current = node;
    };

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(prev => !prev);
            }
        },
        [menuRef]
    );

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, menuRef]);

    return (
        <div ref={handleMenuRef}>
            <button
                className={styles.burger}
                onClick={() => setMenuOpen(prev => !prev)}
            >
                ☰
            </button>
            <aside className={styles.sidebar}>
                <nav>
                    <CoctailsList />
                </nav>
            </aside>
            {isMenuOpen && (
                <div className={styles['mobile-menu']}>
                    <nav>
                        <CoctailsList />
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
