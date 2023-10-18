const dbUrl = 'https://localhost:7023';

// GET ALL ORDERS
const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/order`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

// GET Order Details
const getOrderDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/orderDetails/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

// Delete Order
const deleteOrderById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/orderDetails/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      if (res.ok) {
        resolve();
      }
    })
    .catch(reject);
});

// Create Order
const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

// Update Order
const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/order/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      if (res.ok) {
        resolve();
      }
    })
    .catch(reject);
});

// Clsoe Order
const closeOrder = (payload) => new Promise((resolve, reject) => {
  console.warn('CLOSE');
  fetch(`${dbUrl}/api/close-order/${payload.Id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      if (res.ok) {
        resolve();
      }
    })
    .catch(reject);
});

// GET ALL Closed ORDERS
const getClosedOrders = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/closed-orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

// GET ALL Closed ORDERS
const getRevenue = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/revenue`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

export {
  getAllOrders,
  deleteOrderById,
  createOrder,
  getOrderDetails,
  updateOrder,
  closeOrder,
  getClosedOrders,
  getRevenue,
};
