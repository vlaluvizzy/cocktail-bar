import React from 'react';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';

type CommonLinkProps = {
    to: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
};

export const CommonLink = ({
    to,
    className,
    onClick,
    children,
}: CommonLinkProps): JSX.Element => {
    return (
        <Link to={to} className={className} onClick={onClick}>
            {children}
        </Link>
    );
};
