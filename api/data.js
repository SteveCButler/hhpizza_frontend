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

// GET ALL ITEMS
const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item`, {
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
  fetch(`${dbUrl}/api/order/${id}`, {
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

export {
  getAllOrders,
  getAllItems,
  deleteOrderById,
  createOrder,
};
