import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { deleteOrderById } from '../api/orderData';

function OrderCard({ orderObj, onUpdate }) {
  const deleteOrder = (id) => {
    if (window.confirm('Delete This Post?')) {
      deleteOrderById(id).then(() => onUpdate());
    }
  };

  return (
    <>
      {orderObj.status === 'open' ? (
        <Card style={{ width: '18rem' }} className="my-3">
          <Card.Body>
            <Card.Title className="text-center mb-4">ORDER</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Name: {orderObj.name}</Card.Subtitle>
            <Card.Text>
              Customer Phone: {orderObj.customerPhone}
            </Card.Text>
            <Card.Text>
              Customer Email: {orderObj.customerEmail}
            </Card.Text>
            <Link passHref href={`/Order/${orderObj.id}`}>
              <Button variant="primary" className="mt-3 ms-4 me-4 btn-sm" style={{ height: '32px' }}>
                View
              </Button>
            </Link>
            <Link passHref href={`/Order/edit/${orderObj.id}`}>
              <Button variant="warning" className="mt-3 me-4 btn-sm" style={{ height: '32px' }}>
                Edit
              </Button>
            </Link>
            <Button variant="danger" onClick={() => deleteOrder(orderObj.id)} className="mt-3 me-3 btn-sm" style={{ height: '32px' }}>
              Delete
            </Button>

          </Card.Body>
        </Card>
      ) : (<h4>No open orders</h4>)}

    </>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    customerPhone: PropTypes.string,
    customerEmail: PropTypes.string,
    orderType: PropTypes.string,
    paymentType: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default OrderCard;
