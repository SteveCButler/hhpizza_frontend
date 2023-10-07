export default function HomeMenu() {
  return (
    <div>
      <div className="d-flex flex-column align-content-center justify-content-between w-50 mx-auto mt-5">
        <button type="button" className="btn btn-primary my-3">View Orders</button>
        <button type="button" className="btn btn-success my-3">Create an Order</button>
        <button type="button" className="btn btn-secondary my-3">View Revenue</button>
      </div>
    </div>
  );
}
