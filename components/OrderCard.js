import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function OrderCard({ orderObj }) {
  if (orderObj.status === 'open') {
    console.warn('OPEN-ORDER');
  }
  return (
    <>
      {orderObj.status === 'open' ? (
        <Card style={{ width: '36rem' }} className="my-3">
          <Card.Body>
            <Card.Title>Order: {orderObj.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Status: {orderObj.status}</Card.Subtitle>
            <Card.Text>
              Customer Phone: {orderObj.customerPhone}
            </Card.Text>
            <Card.Link href="#" className="btn btn-small btn-success">View</Card.Link>
            <Card.Link href="#" className="btn btn-small btn-warning">Edit</Card.Link>
            <Card.Link href="#" className="btn btn-small btn-danger">Delete</Card.Link>
          </Card.Body>
        </Card>
      ) : (<h4>No open orders</h4>)}

    </>
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
  orderObj: PropTypes.shape(postShape).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default OrderCard;
