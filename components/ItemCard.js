import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { deleteItemById } from '../api/itemData';

function ItemCard({ itemObj, onUpdate }) {
  const deleteOrder = (id) => {
    if (window.confirm('Delete This Item?')) {
      deleteItemById(id)
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
          <Button variant="danger" onClick={() => deleteOrder(itemObj.id)} className="mt-3 me-3 btn-sm" style={{ height: '32px' }}>
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
};

export default ItemCard;
