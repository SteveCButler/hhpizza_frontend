import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import { deleteItemById } from '../api/itemData';

function ItemCard({ itemObj, onUpdate }) {
  // const { id } = itemObj;

  const deleteItem = (itemId) => {
    if (window.confirm('Delete This Item?')) {
      deleteItemById(itemId)
        .then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem' }} className="my-3">
        <Card.Body>
          <Card.Text>
            Item: {itemObj.name}
          </Card.Text>
          <Card.Text>
            Price: {itemObj.price}
          </Card.Text>
          {/* <Link passHref href={`/Item/edit/${orderId}-${id}`}>
            <Button variant="warning" className="mt-3 me-4 btn-sm" style={{ height: '32px' }}>
              Edit
            </Button>
          </Link> */}
          <Button variant="danger" onClick={() => deleteItem(itemObj.id)} className="mt-3 me-3 btn-sm" style={{ height: '32px' }}>
            Delete
          </Button>

        </Card.Body>
      </Card>

    </>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  // orderId: PropTypes.number.isRequired,
};

export default ItemCard;
