import React from "react";
import Loan from "./Loan";

import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

const LoanCalculator = () => {
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div className="loan-button">
      <div
        style={{
          display: "block",
          width: 700,
          padding: 30,
        }}
      >
        <h4>Loan Calculator</h4>
        <Button onClick={toggle}>Loan Calculator</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Loan Calculator</ModalHeader>
          <ModalBody>
            <Loan />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Okay
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default LoanCalculator;
