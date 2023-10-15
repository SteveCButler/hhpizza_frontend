import { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getOrderDetails } from '../../api/orderData';
import ItemCard from '../../components/ItemCard';

export default function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  // const getTotal = () => {
  //   let orderTotal = 0;
  //   const orderItems = orderDetails.items;
  //   orderItems.forEach((item) => {
  //     orderTotal += item.price;
  //   });
  //   return orderTotal;
  // };

  const getDetails = () => {
    getOrderDetails(id)
      .then((data) => setOrderDetails(data));
    // .then(getTotal);
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let TotalCost = 0;
  // if (orderDetails.items != null) {
  //   TotalCost = getTotal();
  // }

  if (orderDetails.items == null) {
    return (<div />);
  }

  return (
    <Container>

      <Table border className="mt-5">
        <thead className="mt-3 fw-bold fs-3">
          <tr>
            <th>Order:</th>
            <th>{orderDetails.name}</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Status:</td>
            <td>{orderDetails.status}</td>
          </tr>
          <tr>
            <td>Customer Phone:</td>
            <td>{orderDetails.customerPhone}</td>
          </tr>
          <tr>
            <td>Customer Email:</td>
            <td>{orderDetails.customerEmail}</td>
          </tr>
          <tr>
            <td>Order Type:</td>
            <td>{orderDetails.orderType}</td>
          </tr>
        </tbody>
      </Table>

      {orderDetails.items.map((item) => <ItemCard key={item.id} itemObj={item} orderId={orderDetails.id} onUpdate={getDetails} />)}
      {/* <div className="mt-4">
        <h3 className="mb-4">Total: ${TotalCost} </h3>
      </div> */}
      <div className="mt-5">
        <Link passHref href={`/Item/${id}`}>
          <Button className="btn-secondary me-4">Add Item</Button>
        </Link>
        <Link passHref href={`/Order/payment/${id}`}>
          <Button className="btn-dark">Go to Payment</Button>
        </Link>
      </div>
    </Container>
  );
}
