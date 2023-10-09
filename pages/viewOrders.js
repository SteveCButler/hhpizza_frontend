import { useEffect, useState } from 'react';
import { getAllOrders } from '../api/data';
import OrderCard from '../components/OrderCard';

export default function ViewOrders() {
  const [orderList, setOrderList] = useState([]);

  const getOrders = () => {
    getAllOrders().then(setOrderList);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="mt-5">
      <h1>Orders</h1>
      {orderList.map((order) => <OrderCard key={order.id} orderObj={order} onUpdate={getOrders} />)}
    </div>
  );
}
