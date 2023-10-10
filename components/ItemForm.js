import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ItemForm() {
  return (
    <div className="w-75 bg-secondary text-white p-3 mt-4 rounded-3">
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Item Name</Form.Label>
          <Form.Control type="text" placeholder="Enter a name for the item" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Item Price</Form.Label>
          <Form.Control type="text" placeholder="dollar amount" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>

    </div>

  );
}
