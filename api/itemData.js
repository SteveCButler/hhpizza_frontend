const dbUrl = 'https://localhost:7023';

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

// GET single item by id
const getItemById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/${id}`, {
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

// Create Item
const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item`, {
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

// Create Item and Add to Order
const createItemAddToOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/${payload.orderId}`, {
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

// Update Item
const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/${payload.id}`, {
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

// Delete Item
const deleteItemById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/item/${id}`, {
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

export {
  getAllItems,
  createItem,
  deleteItemById,
  createItemAddToOrder,
  updateItem,
  getItemById,
};
