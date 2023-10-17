import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { createItemAddToOrder, updateItem } from '../api/itemData';

const initialState = {
  name: '',
  price: 0,
};

export default function ItemForm({ itemObj, orderId }) {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (itemObj.id) {
      setFormData(itemObj);
    }
  }, [itemObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemObj.id) {
      const payload = { ...formData, Id: itemObj.id };
      updateItem(payload)
        .then(() => router.push(`/Order/${orderId}`));
    } else {
      const payload = { ...formData, orderId: id };
      createItemAddToOrder(payload)
        .then(router.push(`/Order/${id}`))
        .catch((error) => {
          console.error('API Error:', error);
        });
    }
  };

  return (
    <div className="w-75 bg-secondary text-white p-3 mt-4 rounded-3">
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a name for the item"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="dollar amount"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="dark" className="mt-3" type="submit">
          {itemObj.id ? 'Edit' : 'Add'} Item
        </Button>
      </Form>

    </div>

  );
}

ItemForm.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  orderId: PropTypes.number,
};

ItemForm.defaultProps = {
  itemObj: PropTypes.shape(initialState),
  orderId: null,
};
