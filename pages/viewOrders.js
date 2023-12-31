import { useEffect, useState } from 'react';
import { getAllOrders } from '../api/data';
import OrderCard from '../components/OrderCard';

export default function ViewOrders() {
  const [orderList, setOrderList] = useState([]);

  const getOrders = () => {
    getAllOrders().then((data) => setOrderList(data));
  };

  useEffect(() => {
    getOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="mt-3">Orders</h1>
      <div className="mt-3 d-flex flex-wrap gap-3">

        {orderList.length > 0 && orderList.map((order) => <OrderCard key={order.id} orderObj={order} onUpdate={getOrders} />)}
      </div>
    </>

  );
}
