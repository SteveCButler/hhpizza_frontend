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

  console.warn('Param: ', id);

  const getDetails = async (orderId) => {
    const data = await getOrderDetails(orderId);
    setOrderDetails(data);
  };

  useEffect(() => {
    getDetails(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (orderDetails.items == null) {
    return (<h2>NOTHING THERE</h2>);
  }

  return (
    <Container>
      <h3>{orderDetails.name}</h3>
      <h1 className="mt-5">Order Details</h1>
      {orderDetails.items.map((item) => <ItemCard key={item.id} itemObj={item} onUpdate={getDetails(id)} />)}

      <Link passHref href="/addItem">
        <Button className="btn-secondary me-4">Add Item</Button>
      </Link>
      <Link passHref href="/viewRevenue">
        <Button className="btn-dark">Go to Payment</Button>
      </Link>

    </Container>
  );
}
