import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getRevenue } from '../api/orderData';

export default function ViewRevenue() {
  const [closedOrders, setClosedOrders] = useState([]);

  useEffect(() => {
    getRevenue().then(setClosedOrders);
  }, []);

  return (
    <>
      <h1 className="mt-3">Revenue</h1>
      <Table className="mt-5">
        <tbody>
          <tr className="fs-3">
            <td>TOTAL REVENUE</td>
            <td>${closedOrders.sum?.toFixed(2)}</td>
          </tr>
          <tr className="fs-4">
            <td>Total Tips</td>
            <td>${closedOrders.tips?.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </>

  );
}
