import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

import Sidebar from '@/ui/sidebar/Sidebar';

export const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
};
