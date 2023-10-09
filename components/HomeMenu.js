import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export default function HomeMenu() {
  return (
    <div>
      <div className="d-flex flex-column align-content-center justify-content-between w-50 mx-auto mt-5">
        <Link passHref href="/viewOrders">
          <Button type="button" className="btn btn-primary my-3">View Orders</Button>
        </Link>
        <Link passHref href="/createOrder">
          <Button type="button" className="btn btn-success my-3">Create an Order</Button>
        </Link>
        <Link passHref href="/viewRevenue">
          <Button type="button" className="btn btn-secondary my-3">View Revenue</Button>
        </Link>
      </div>
    </div>
  );
}
