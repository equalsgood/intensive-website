import React, { useContext } from 'react';
import { Context } from "app/providers/ContextProvider";
import { Modal } from "shared/components";
import { TryForFree } from "sections/shared";

export const ModalHandler = () => {
    const { isModalVisible, changeModalVisibility } = useContext(Context);

    return (
        <Modal visible={isModalVisible} setVisible={changeModalVisibility}>
            <TryForFree isModal={true} onClose={changeModalVisibility}/>
        </Modal>
    );
};
