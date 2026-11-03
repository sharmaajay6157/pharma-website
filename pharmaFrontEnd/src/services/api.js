const API_URL = import.meta.env.VITE_API_URL;

export async function createContact(contactData) {
  const response = await fetch(`${API_URL}/api/contacts`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  console.log({ data });
  return data;
}

export async function getProducts() {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}



export async function createPaymentOrder(orderData) {
  const response = await fetch(`${API_URL}/api/payment/create-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to create order.");
  }

  return data;
}

export async function verifyPayment(paymentData) {
  const response = await fetch(`${API_URL}/api/payment/verify-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Payment verification failed.");
  }

  return data;
}