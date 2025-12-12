import React, { ReactNode } from 'react';
import cls from './Modal.module.css';
import classNames from "classnames";

interface ModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (value: boolean) => void;
}

export const Modal = ({children, visible, setVisible}: ModalProps) => {
    const classes = classNames(cls.modal, {[cls.active]: visible});

    return (
        <div className={classes} onClick={() => setVisible(false)}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
