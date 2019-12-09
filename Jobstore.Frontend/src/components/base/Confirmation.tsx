import React from 'react';
import { Modal, ModalHeader, ModalFooter, Button } from 'reactstrap';

interface ConfirmationProps {
    isOpen: boolean,
    confirmationMessage: string,
    cancelButtonLabel: string,
    confirmButtonLabel: string,
    onCancel: () => void,
    onConfirm: () => void,
}

const Confirmation: React.FC<ConfirmationProps> = ({ isOpen, confirmationMessage, cancelButtonLabel, confirmButtonLabel, onCancel, onConfirm }) => {
    return (<Modal isOpen={isOpen}>
        <ModalHeader>{confirmationMessage}</ModalHeader>
        <ModalFooter>
            <Button
                onClick={onConfirm}
                color="primary">{confirmButtonLabel}</Button>
            <Button
                onClick={onCancel}
                color="secondary">{cancelButtonLabel}</Button>
        </ModalFooter>
    </Modal>);
}

export default Confirmation;