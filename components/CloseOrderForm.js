import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { closeOrder } from '../api/orderData';

const initialState = {
  tip: 0,
};

const CloseOrderForm = ({ orderObj, total }) => {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();
  const [review, setReview] = useState('');

  console.warn('TOTAL: ', total);

  const handleClick = (resp) => {
    setReview(resp);
  };

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

  console.warn('FormData: ', formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      Id: orderObj.id,
      status: 'closed',
      orderTotal: total,
      review,
    };
    console.warn('PAYLOAD: ', payload);
    closeOrder(payload)
      .then(() => router.push('/viewOrders'));
  };

  return (
    <div className="w-75 bg-secondary text-white p-3 mt-3 rounded-3">
      <h1 className="mb-3">Order: {orderObj.name}</h1>
      <p className="mb-4 fs-3 text-bg-dark p-3 rounded-3">Total: ${total}</p>
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
        <hr className="mb-4" />
        <p>How would you rate your service?</p>
        <div className="d-flex gap-3">
          <Button className="btn-outline-dark btn-light" onClick={(() => handleClick(0))}>Poor</Button>
          <Button className="btn-outline-dark btn-light" onClick={(() => handleClick(1))}>OK</Button>
          <Button className="btn-outline-dark btn-light" onClick={(() => handleClick(2))}>Good</Button>
          <Button className="btn-outline-dark btn-light" onClick={(() => handleClick(3))}>Great</Button>
          <Button className="btn-outline-dark btn-light" onClick={(() => handleClick(4))}>Better than Mamma</Button>
        </div>

        <Button className="mt-5 btn-success fw-semi-bold fs-5" variant="primary" type="submit">
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
  total: PropTypes.string.isRequired,
};
