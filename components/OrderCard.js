import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { deleteOrderById } from '../api/data';

function OrderCard({ orderObj, onUpdate }) {
  const deleteOrder = (id) => {
    if (window.confirm('Delete This Order?')) {
      deleteOrderById(id).then(() => onUpdate());
    }
  };

  return (
    <>
      {orderObj.status === 'open' && (
        <Card style={{ width: '18rem' }} className="my-3">
          <Card.Body>
            <Card.Title className="mb-4">{orderObj.name}</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Name: {orderObj.name}</Card.Subtitle> */}
            <Card.Text>
              Phone: {orderObj.customerPhone}
            </Card.Text>
            <Card.Text>
              Email: {orderObj.customerEmail}
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
      ) }

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

// OrderCard.defaultProps = {
//   onUpdate: () => {},
// };

export default OrderCard;
