import React from 'react';
import cls from './Divider.module.css';
import DividerIcon from 'shared/assets/icons/divider.svg';
import ScissorsIcon from 'shared/assets/icons/scissors.svg';
export const Divider = () => {
    return (
        <div className={cls.container}>
            <ScissorsIcon/>
            <DividerIcon/>
            <DividerIcon/>
            <DividerIcon/>
        </div>
    );
};