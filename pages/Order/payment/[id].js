import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CloseOrderForm from '../../../components/CloseOrderForm';
import { getOrderDetails } from '../../../api/orderData';

export default function ViewRevenue() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState({});
  console.warn('ID: ', id);

  useEffect(() => {
    getOrderDetails(id).then((data) => setOrder(data));
  }, []);
  console.warn('Order: ', order);

  return (
    <>
      <h1 className="mt-3">Revenue</h1>
      <CloseOrderForm orderObj={order} />
    </>

  );
}
