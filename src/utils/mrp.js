export const mrp = (stock, necessities, lotSize) => {
  let planned = 0;
  let received = 0;

  const entries = [];

  for (let i = 0; i < 10; i++) {
    entries[i] = {};

    if (planned > 0) {
      stock += planned;
      received = planned;
      planned = 0;
    }

    if (stock >= necessities[i]) {
      stock -= necessities[i];
    }

    if (stock < necessities[i]) {
      planned += lotSize - stock;
      received = 0;
    }

    entries[i].planned = planned;
    entries[i].stock = stock;
    entries[i].received = received;
    entries[i].necessity = necessities[i] - stock;
  }

  return entries;
};
