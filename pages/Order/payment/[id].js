import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CloseOrderForm from '../../../components/CloseOrderForm';
import { getOrderDetails } from '../../../api/orderData';

export default function ViewRevenue() {
  const router = useRouter();
  const { id } = router.query;
  const [orderDetails, setOrderDetails] = useState({});

  const getTotal = () => {
    let orderTotal = 0;
    const orderItems = orderDetails.items;
    orderItems.forEach((item) => {
      orderTotal += item.price;
    });
    return orderTotal;
  };

  useEffect(() => {
    getOrderDetails(id).then((data) => setOrderDetails(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let TotalCost = 0;
  if (orderDetails.items != null) {
    TotalCost = getTotal();
  }

  return (
    <>
      <h1 className="mt-3">Payment</h1>
      <CloseOrderForm orderObj={orderDetails} total={TotalCost.toFixed(2)} />
    </>

  );
}
