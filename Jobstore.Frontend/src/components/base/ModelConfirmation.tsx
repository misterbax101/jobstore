import React from 'react'
import { Modal , ModalFooter, ModalHeader, ModalBody, Button } from 'reactstrap';

interface ModelConfirmationProps {
    show: boolean,
    onConfirm: () => void,
    onClose: () => void
}

const ModelConfirmation: React.FC<ModelConfirmationProps> = ({show, onClose, onConfirm}) => {
    return (
        <div>
        <Modal isOpen={show} toggle={onClose}>
          <ModalHeader toggle={onClose}>Modal title</ModalHeader>
          <ModalBody >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onClose}>Do Something</Button>{' '}
            <Button color="secondary" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

export default ModelConfirmation;