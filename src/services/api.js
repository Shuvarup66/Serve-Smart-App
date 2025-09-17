const API_URL = "http://localhost:4000";

// Fetch menu
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  return res.json();
}

// Fetch all orders
export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`);
  return res.json();
}

// Create a new order
export async function postOrder(order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
}

// ✅ Update an existing order (fix for your error)
export async function updateOrder(id, updatedOrder) {
  const res = await fetch(`${API_URL}/orders/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedOrder),
  });
  return res.json();
}
