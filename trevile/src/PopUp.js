import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

function selectCategory(selectedItem){
  const button = document.querySelector('#category');
  document.querySelector('#category').textContent = selectedItem.target.innerText;
}

function otherSelected(){

}

const PopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Faced a problem?
      </Button>

      <Modal show={show} onHide={handleClose} id="problem">
        <Modal.Header closeButton>
          <Modal.Title>Found a problem?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Problem category</Form.Label>
              <DropdownButton id="category" title="category">
                <Dropdown.Item onClick={selectCategory}>Scam</Dropdown.Item>
                <Dropdown.Item onClick={selectCategory}>Theft</Dropdown.Item>
                <Dropdown.Item onClick={selectCategory}>Discrimination</Dropdown.Item>
                <Dropdown.Item onClick={selectCategory}>Other</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Problem Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Report Problem
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;