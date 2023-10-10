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

  console.warn('OrderList: ', orderList);

  return (
    <div className="mt-3">
      {/* <h1>Orders</h1> */}
      {orderList.length > 0 ? orderList.map((order) => <OrderCard key={order.id} orderObj={order} onUpdate={getOrders} />) : (<h2 className="text-primary">No Open Orders</h2>)}
    </div>
  );
}
