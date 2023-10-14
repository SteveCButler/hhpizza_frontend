import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getOrderDetails } from '../../../api/orderData';
import CreateOrderForm from '../../../components/CreateOrderForm';

export default function EditOrder() {
  const [orderDetails, setOrderDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getDetails = () => {
    getOrderDetails(id).then((data) => setOrderDetails(data));
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <h2 className="mt-3">Edit Order</h2>
      <CreateOrderForm orderObj={orderDetails} />
    </>

  );
}
