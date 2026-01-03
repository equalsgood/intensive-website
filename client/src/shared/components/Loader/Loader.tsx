import React from 'react';
import cls from './Loader.module.css';
import classNames from "classnames";

interface LoaderProps {
    adjustable?: boolean;
}

export const Loader = ({ adjustable }: LoaderProps) => {
    return (
        <div className={classNames(cls.container, {[cls.adjustable]: adjustable})}>
            <div className={cls.loader}></div>
        </div>
    );
};

