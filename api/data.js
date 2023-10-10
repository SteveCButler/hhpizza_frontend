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

export {
  getAllOrders,
  getAllItems,
};
