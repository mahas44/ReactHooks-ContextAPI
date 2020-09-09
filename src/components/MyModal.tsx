import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import MovieDetail from "./MovieDetail";

export default function MyModal(props: any) {
    console.log(props.item)
  return (
    <Modal
      key={props.modalIndex}
      isOpen={props.isOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader toggle={props.toggle}>{props.item.title} {props.item.name}</ModalHeader>
      <ModalBody>
        <MovieDetail/>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}
