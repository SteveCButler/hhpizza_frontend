import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CloseOrderForm = () => (
  <div className="w-75 bg-secondary text-white p-3 mt-3 rounded-3">
    <Form className="mt-3">

      <Form.Group className="mb-3" controlId="formPaymentType">
        <Form.Label>Payment Type</Form.Label>
        <Form.Select aria-label="Order Type Select">
          <option>Select payment type</option>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="venmo">Venmo</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTip">
        <Form.Label>Tip Amount</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Close Order
      </Button>
    </Form>

  </div>
);

export default CloseOrderForm;
