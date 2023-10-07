import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  if (order.status === 'open') {
    console.warn('OPEN-ORDER');
  }
  return (

    <Card style={{ width: '36rem' }} className="my-3">
      <Card.Body>
        <Card.Title>Order: {order.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Status: {order.status}</Card.Subtitle>
        <Card.Text>
          Customer Phone: {order.customerPhone}
        </Card.Text>
        <Card.Link href="#" className="btn btn-small btn-success">View</Card.Link>
        <Card.Link href="#" className="btn btn-small btn-warning">Edit</Card.Link>
      </Card.Body>
    </Card>
  );
}

const postShape = PropTypes.shape({
  name: PropTypes.string,
  status: PropTypes.string,
  customerPhone: PropTypes.string,
  customerEmail: PropTypes.string,
  orderType: PropTypes.string,
  paymentType: PropTypes.string,
});

OrderCard.propTypes = {
  order: PropTypes.arrayOf(postShape).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default OrderCard;
