import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { deleteItemById } from '../api/itemData';

function ItemCard({ itemObj, onUpdate }) {
  const { id } = itemObj;
  const router = useRouter();
  const orderId = router.query.id;

  const deleteItem = (itemId) => {
    if (window.confirm('Delete This Item?')) {
      deleteItemById(itemId)
        .then(() => onUpdate());
    }
  };

  return (
    <>
      <Card className="mt-4 p-2 w-100">
        <Card.Header className="fw-semibold d-flex justify-content-between">
          <div className="w-25">
            {itemObj.name}
          </div>
          <div className="w-25 text-center">
            ${itemObj.price.toFixed(2)}
          </div>
          <Link passHref href={`/Item/edit/${orderId}_${id}`}>
            <Button variant="warning" className="btn-sm" style={{ height: '32px' }}>
              Edit
            </Button>
          </Link>
          <Button variant="danger" onClick={() => deleteItem(itemObj.id)} className=" me-3 btn-sm" style={{ height: '32px' }}>
            Delete
          </Button>
        </Card.Header>
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
