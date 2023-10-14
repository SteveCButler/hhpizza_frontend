import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { closeOrder } from '../api/orderData';

const initialState = {
  tip: 0,
};

const CloseOrderForm = ({ orderObj }) => {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    setFormData(orderObj);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, Id: orderObj.id, status: 'closed' };
    closeOrder(payload)
      .then(() => router.push('/viewOrders'));
  };

  return (
    <div className="w-75 bg-secondary text-white p-3 mt-3 rounded-3">
      <Form className="mt-3" onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formPaymentType">
          <Form.Label>Payment Type</Form.Label>
          <Form.Select
            aria-label="Order Type Select"
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
          >
            <option>Select payment type</option>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="venmo">Venmo</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTip">
          <Form.Label>Tip Amount</Form.Label>
          <Form.Control
            type="text"
            name="tip"
            value={formData.tip}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="mt-3 btn-dark" variant="primary" type="submit">
          Close Order
        </Button>
      </Form>

    </div>
  );
};

export default CloseOrderForm;

CloseOrderForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    customerPhone: PropTypes.string,
    customerEmail: PropTypes.string,
    orderType: PropTypes.string,
    paymentType: PropTypes.string,
  }).isRequired,
};
