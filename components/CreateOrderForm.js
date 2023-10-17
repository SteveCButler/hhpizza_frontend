import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../utils/context/authContext';
import { createOrder, updateOrder } from '../api/orderData';

const initialState = {
  name: '',
  customerPhone: '',
  customerEmail: '',
  orderType: '',
  status: 'open',
  userId: 0,
};

export default function CreateOrderForm({ orderObj }) {
  const [formData, setFormData] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (orderObj.id) {
      setFormData(orderObj);
    }
  }, [orderObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderObj.id) {
      const payload = { ...formData, Id: orderObj.id };
      updateOrder(payload)
        .then(() => router.push('/viewOrders'));
    } else {
      const payload = { ...formData, userId: user.id, status: 'open' };
      createOrder(payload)
        .then(router.push('/viewOrders'))
        .catch((error) => {
          console.error('API Error:', error);
        });
    }
  };

  return (
    <div className="w-75 bg-secondary text-white p-3 mt-4 rounded-3">
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Order Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a name for the order"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Customer Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="nnn-nnn-nnnn"
            name="customerPhone"
            value={formData.customerPhone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Customer Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formOrderType">
          <Form.Label>Order Type</Form.Label>
          <Form.Select
            aria-label="Order Type Select"
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
          >
            <option>Select order type</option>
            <option value="phone">Phone</option>
            <option value="in-person">In-Person</option>
            <option value="online">Online</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCashierId">
          <Form.Control
            type="hidden"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {orderObj.id ? 'Edit' : 'Create'} Order
        </Button>
      </Form>

    </div>

  );
}

CreateOrderForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    customerPhone: PropTypes.string,
    customerEmail: PropTypes.string,
    orderType: PropTypes.string,
    paymentType: PropTypes.string,
  }),
};

CreateOrderForm.defaultProps = {
  orderObj: PropTypes.shape(initialState),
};
