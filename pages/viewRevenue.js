import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getClosedOrders } from '../api/orderData';

export default function ViewRevenue() {
  const [closedOrders, setClosedOrders] = useState([]);

  useEffect(() => {
    getClosedOrders().then(setClosedOrders);
  }, []);

  const getTotal = () => {
    let totalRevenue = 0;
    closedOrders.forEach((order) => {
      totalRevenue += order.orderTotal;
    });
    return totalRevenue;
  };

  const getTotalTips = () => {
    let totalTips = 0;
    closedOrders.forEach((order) => {
      totalTips += order.tip;
    });
    return totalTips;
  };

  let revenue = 0;
  let tips = 0;
  if (closedOrders != null) {
    revenue = getTotal();
    tips = getTotalTips();
  }

  return (
    <>
      <h1 className="mt-3">Revenue</h1>
      <Table className="mt-5">
        <tbody>
          <tr className="fs-3">
            <td>TOTAL REVENUE</td>
            <td>${revenue.toFixed(2)}</td>
          </tr>
          <tr className="fs-4">
            <td>Total Tips</td>
            <td>${tips.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </>

  );
}
