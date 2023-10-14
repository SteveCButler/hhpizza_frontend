import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getOrderDetails } from '../../api/orderData';
import ItemCard from '../../components/ItemCard';

export default function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getTotal = () => {
    let orderTotal = 0;
    const orderItems = orderDetails.items;
    orderItems.forEach((item) => {
      orderTotal += item.price;
    });
    return orderTotal;
  };

  const getDetails = () => {
    getOrderDetails(id)
      .then((data) => setOrderDetails(data));
    // .then(getTotal);
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let TotalCost = 0;
  if (orderDetails.items != null) {
    TotalCost = getTotal();
  }

  if (orderDetails.items == null) {
    return (<div />);
  }

  return (
    <Container>
      <p className="mt-3 fw-bold fs-3">{orderDetails.name}</p>
      <p><b>Status:</b> {orderDetails.status}</p>
      <p><b>Customer Phone: </b>{orderDetails.customerPhone}</p>
      <p><b>Customer Email: </b> {orderDetails.customerEmail}</p>
      <p><b>Type:</b> {orderDetails.orderType}</p>
      <hr />

      {orderDetails.items.map((item) => <ItemCard key={item.id} itemObj={item} orderId={orderDetails.id} onUpdate={getDetails} />)}
      <div className="mt-4">
        <h3 className="mb-4">Total: ${TotalCost} </h3>
      </div>
      <Link passHref href={`/Item/${id}`}>
        <Button className="btn-secondary me-4">Add Item</Button>
      </Link>
      <Link passHref href={`/Order/payment/${id}`}>
        <Button className="btn-dark">Go to Payment</Button>
      </Link>

    </Container>
  );
}
