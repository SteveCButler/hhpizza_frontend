import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemForm from '../../../components/ItemForm';
import { getItemById } from '../../../api/itemData';

export default function EditItem() {
  const [itemDetails, setItemDetails] = useState({});
  const router = useRouter();
  const routeId = router.query.orderId_id;
  const [orderId, itemId] = routeId.split('_');

  console.warn('orderId: ', orderId);
  console.warn('itemId: ', itemId);

  const getItemDetails = () => {
    getItemById(itemId).then((data) => setItemDetails(data));
  };

  useEffect(() => {
    getItemDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return (
    <>
      <h2 className="mt-3">Edit Item</h2>
      <ItemForm itemObj={itemDetails} orderId={orderId} />
    </>

  );
}
