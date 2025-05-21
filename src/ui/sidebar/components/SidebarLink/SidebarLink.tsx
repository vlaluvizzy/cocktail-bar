import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './SidebarLink.module.scss';

import { CommonLink } from '@/shared/components/Link/Link';
import { useCocktailsStore } from '@/store/useCocktailsStore';

type SidebarLinkProps = {
    children: React.ReactNode;
    id: string;
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({
    children,
    id,
}: SidebarLinkProps) => {
    const { setCurrentCocktailId } = useCocktailsStore();
    const { pathname } = useLocation();

    const handleSetCurrentCocktailId = () => {
        setCurrentCocktailId(id);
    };

    return (
        <CommonLink
            to={`/cocktails/${id}`}
            className={
                id === pathname.split('/').pop()
                    ? styles['sidebar-link_active']
                    : styles['sidebar-link']
            }
            onClick={handleSetCurrentCocktailId}
        >
            {children}
        </CommonLink>
    );
};
